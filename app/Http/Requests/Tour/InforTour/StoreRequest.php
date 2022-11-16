<?php

namespace App\Http\Requests\Tour\InforTour;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required',
            'description_en' => 'nullable',
            'description_vn' => 'nullable',
            'images.*' => 'nullable|mimes:png,jpg,jpeg,svg',
        ];
    }
}
