<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Mail\Mailable;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Contracts\Queue\ShouldQueue;

class DatabaseTablesCounts extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(public $businesses, public $users, public $products, public $bills)
    {
        //
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Laptop POS: Database Tables Counts',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            markdown: 'emails.DatabaseTablesCounts',
            with:[
                'businesses'=>$this->businesses,
                'users'=>$this->users,
                'products'=>$this->products,
                'bills'=>$this->bills,
            ]
        );
    }
}
