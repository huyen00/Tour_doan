<?php

namespace App\Http\Controllers\web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
class PageController extends Controller
{
    //
    public function index(){

        return Inertia::render('web/news');
    }
}
