<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactMessage;
use illuminate\Http\RedirectResponse;


class ContactMessageController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'nullable|string',
            'subject' => 'required|string|max:255',
            'interest' => 'nullable|string',
            'message' => 'required|string',
        ]);

        ContactMessage::create($validated);

        return back()->with('success', 'Mensagem enviada com sucesso.');
    }

    public function index()
    {
        return Inertia::render('Admin/Mensagens', [
            'messages' => ContactMessage::latest()->get()
        ]);
    }

    public function show(ContactMessage $message)
    {
        return Inertia::render('Admin/MensagemDetalhe', [
            'message' => $message
        ]);
    }

    public function destroy(ContactMessage $message)
    {
        $message->delete();

        return redirect()->back()->with('success', 'Mensagem excluída com sucesso.');
    }
}

