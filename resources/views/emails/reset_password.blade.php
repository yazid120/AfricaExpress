<!-- resources/views/emails/reset_password.blade.php -->

<x-mail::message>
    <x-slot name="title">
        AfricaExpress Password reset
    </x-slot>


    <p style="font-size: 16px; line-height: 1.5em; color: #718096;">
        Dear User,
    </p>

    <p style="font-size: 16px; line-height: 1.5em; color: #718096;">
        You have requested to reset your password. Please click the button below to proceed:
    </p>

    <x-mail::button :url="$resetUrl" style="background-color: #2766d3; color: #ffffff; border-radius: 4px; display: inline-block; font-size: 16px; font-weight: bold; padding: 12px 24px; text-decoration: none;">
        Reset Password
    </x-mail::button>

    <p style="font-size: 16px; line-height: 1.5em; color: #718096;">
        If you did not request a password reset, you can safely ignore this email.
    </p>

    <p style="font-size: 16px; line-height: 1.5em; color: #718096;">
        Thanks,<br>
        {{ config('app.name') }}
    </p>
</x-mail::message>
