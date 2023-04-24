<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatController extends Controller
{
    /**
     * Configures the chat functionalities
     */
    public function index()
    {
        return Inertia::render('Chat/Chat');
    }
}
