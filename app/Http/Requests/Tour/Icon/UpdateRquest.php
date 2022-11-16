<?php

namespace App\Http\Requests\Tour\Icon;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRquest extends FormRequest
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
            'name' => 'required',
            'icon' => 'nullable|mimes:png,jpg,jpeg|max:2048'
        ];
    }
}
