<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class RouteLinkStored
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $routeLink;

    public function __construct($routeLink)
    {
        $this->routeLink = $routeLink;
    }

    public function broadcastOn()
    {
        return new Channel('route-link-channel');
    }
}
