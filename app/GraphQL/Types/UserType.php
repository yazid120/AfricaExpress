<?php

declare(strict_types=1);

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class UserType extends GraphQLType
{
    protected $attributes = [
        'name' => 'User',
        'description' => 'A user type'
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The ID of the user'
            ],
            'name' => [
                'type' => Type::string(),
                'description' => 'The name of the user'
            ],
            'email' => [
                'type' => Type::string(),
                'description' => 'The email of the user'
            ],
            'email_verified_at' => [
                'type' => Type::string(),
                'description' => 'The email verified at timestamp'
            ],
            'password' => [
                'type' => Type::string(),
                'description' => 'The password of the user'
            ],
            'user_token' => [
                'type' => Type::string(),
                'description' => 'The user token'
            ],
            'logical_delete' => [
                'type' => Type::boolean(),
                'description' => 'Logical delete flag'
            ],
            'created_at' => [
                'type' => Type::string(),
                'description' => 'The timestamp when the user was created'
            ],
            'updated_at' => [
                'type' => Type::string(),
                'description' => 'The timestamp when the user was last updated'
            ],
        ];
    }
}
