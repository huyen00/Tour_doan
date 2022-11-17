<?php

namespace App\Http\Controllers\web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use DB;
class PageController extends Controller
{
    //
    public function index(){
        $page = DB::select('SELECT * FROM pages');
        return Inertia::render('web/page');
        // return view('Pages.web.page', compact('page'));
    }
    public function postAdd(Request $request){
        // $request->validate([

        // ])
    }
}
