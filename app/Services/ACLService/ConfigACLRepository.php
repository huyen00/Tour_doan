<?php

namespace App\Services\ACLService;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

/**
 * Class ConfigACLRepository
 *
 * Get rules from file-manager config file - aclRules
 *
 * @package Alexusmai\LaravelFileManager\Services\ACLService
 */
class ConfigACLRepository implements ACLRepository
{
    /**
     * Get user ID
     *
     * @return mixed
     */
    public function getUserID()
    {
        return \Auth::id();
    }

    /**
     * Get rules from file-manger.php config file
     *
     * @return array
     */
    public function getRules(): array
    {
        return config('file-manager.aclRules')[$this->getUserID()] ?? [];
    }
}
