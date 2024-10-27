@extends('layouts.app')


@section('content')
    <!-- Your page content goes here -->
    <div class="page-header row no-gutters flex justify-between py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <h3 class="page-title">espace des client - admin -</h3>
        </div>
        <div class="col-12 col-sm-4 text-center text-sm-right mb-0">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addClientModal">
                <i class="fas fa-plus"></i> Add New Client
            </button>
        </div>
    </div>
    <div class="table-responsive">
        <table class="table table-striped table-hover">
            <thead class="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>User Type</th>
                    <th>Phone Number</th>
                    <th>Email Verified</th>
                    <th>Active Status</th>
                    <th>Created At</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($users as $user)
                    <tr>
                        <td>{{ $loop->iteration }}</td>
                        <td>{{ $user->name }}</td>
                        <td>{{ $user->email }}</td>
                        <td>{{ ucfirst($user->user_type) }}</td>
                        <td>{{ $user->phone_number ?? 'N/A' }}</td>
                        <td>{{ $user->email_verified_at ? 'Verified' : 'Not Verified' }}</td>
                        <td>{{ $user->logical_delete ? 'Inactive' : 'Active' }}</td>
                        <td>{{ $user->created_at->format('d M Y') }}</td>
                        <td>
                            <a href="{{ route('users.show', $user->id) }}" class="btn btn-info btn-sm">View</a>
                            <button class="btn btn-warning btn-sm" onclick="openEditUserModal({{ $user->id }}, '{{ $user->name }}', '{{ $user->email }}', '{{ $user->user_type }}', '{{ $user->phone_number }}')">Edit</button>
                            {{-- <form action="{{ route('users.destroy', $user->id) }}" method="POST" style="display: inline;">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure?')">Delete</button>
                            </form> --}}
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="9" class="text-center">No users found</td>
                    </tr>
                @endforelse
            </tbody>
        </table>

        <!-- Pagination Links -->
        <div class="d-flex justify-content-center">
            {{ $users->links() }}  <!-- This renders the pagination links -->
        </div>
    </div>
    @if (session('success'))
                <div class="alert alert-success">
                    {{ session('success') }}
                </div>
    @endif
    @include('components.users._add_user_form')

    @include('components.users._edit_user_form')
@endsection
<script src="{{ asset('js/admin/users.js') }}"></script>


