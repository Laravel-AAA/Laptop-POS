<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Password;

class InviteAccountToBusiness extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(public User $owner, public User $account)
    {
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'You are invited to join ' . $this->owner->business->name . '!',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        $token = Password::getRepository()->create($this->account);
        $verificationUrl = url(route('password.reset', [
            'token' => $token,
            'email' => $this->account->email,
        ], false));
        
        return new Content(
            markdown: 'emails.InviteAccountToBusiness',
            with: [
                'owner' => $this->owner,
                'account' => $this->account,
                'verificationUrl' => $verificationUrl,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
