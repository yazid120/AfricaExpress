<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Mutation;
use Rebing\GraphQL\Support\Facades\GraphQL;

class ExampleMutation extends Mutation
{
    protected $attributes = [
        'name' => 'exampleMutation',
        'description' => 'A mutation example'
    ];

    public function type(): Type
    {
        return GraphQL::type('Example');
    }

    public function args(): array
    {
        return [
            'name' => [
                'name' => 'name',
                'type' => Type::nonNull(Type::string()),
            ],
        ];
    }

    public function resolve($root, $args)
    {
        return [
            'name' => $args['name']
        ];
    }
}
