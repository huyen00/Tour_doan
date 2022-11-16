<?php

namespace App\Http\Controllers\Tour;


use App\Http\Controllers\Controller;
use App\Http\FileManager;
use App\Http\Requests\Tour\StoreRequest;
use App\Models\Pano;
use App\Models\Tour;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\FileTrait;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Models\CategoryPano;
use Illuminate\Http\Response;

class PanoController extends Controller
{
    use FileTrait;
    public $pathPrefix;
    function __construct(FileManager $fm)
    {
        $this->middleware('permission:view-tour|create-tour|delete-tour|edit-tour', ['only' => ['index']]);
        $this->middleware('permission:create-tour', ['only' => ['store']]);
        $this->middleware('permission:edit-tour', ['only' => ['update']]);
        $this->middleware('permission:delete-tour', ['only' => ['destroy']]);
        $this->pathPrefix = Storage::disk('public')
            ->getDriver()
            ->getAdapter()
            ->getPathPrefix();
    }
    public function index(Request $request, $id)
    {
        $tour = Tour::with('category_panos')->findOrFail($id);

        $category_panos = $tour->category_panos;
        $panos = Pano::where('tour_id', $tour->id)->where(function ($query) use ($request) {
            $query->where('name', 'LIKE', '%' . $request->term . '%');
        })->orderBy('id_priority', 'asc')->orderBy('id', 'asc')->get();

        return Inertia::render('Tour/Pano/Pano', compact('panos', 'tour', 'category_panos'));
    }

    public function update(Request $request, $id)
    {

        $this->validate(
            $request,
            [
                'name' => 'required',
                'thumb' => 'nullable|mimes:png,jpg'
            ]
        );
        $pano = Pano::findOrFail($id);

        $pano->update([
            'name' => $request->name,
        ]);
        if ($request->hasFile('thumb')) {
            $this->updateThumb($request->file('thumb'),  $pano->thumb_img);
        }
        return back()->with('success', 'Update successfully');
    }

    public function selectCategory(Request $request)
    {
        Pano::find($request->id)->update(['category_pano_id' => $request->category]);
        return back()->with('success', 'Update successfully');
    }
    public function priorityPano(Request $request)
    {
        $data = $request->data;
        for ($i = 0; $i < count($data); $i++) {
            Pano::findOrFail($data[$i]['id'])->update(['id_priority' => $i]);
        }
        return redirect()->back()->with('success', 'Sort  successfully');
    }
}
