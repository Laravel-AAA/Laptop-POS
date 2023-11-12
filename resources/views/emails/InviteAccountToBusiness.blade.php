@component('mail::message')

# You are invited to join <b>{{ $owner->business->name }}</b>!

Hello {{ $account->name }},

You have been invited to join **{{ $owner->business->name }}** business by **{{ $owner->name }}**, the administrator of the business. To activate your account, please reset your password by clicking the button below.


@component('mail::button',['url'=>$verificationUrl])
        Activate & Reset Password
@endcomponent

This activation link will expire in 60 minutes. If the link expired don't worry you can either contact the administrator **{{ $owner->name }}** for the initial password, or you can claim that you have [forgot your password]({{ env('APP_URL') }}/forgot-password) on the login page and get password reset link.

If you think this email is sent to you by mistake, you can ignore it and no further action is required.

@lang('Regards'),<br>{{ config('app.name') }}

@component('mail::subcopy')

If you're having trouble clicking the "Activate & Reset Password" button, copy and paste the URL below into your web browser: <br/><span class="break-all"><a href="{{ $verificationUrl }}">{{ $verificationUrl }}</a></span>

@endcomponent

@endcomponent
