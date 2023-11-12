@component('mail::message')

# You are invited to join <b>{{ $owner->business->name }}</b>!

Hello {{ $account->name }},

You have been invited to join **{{ $owner->business->name }}** business by <b>{{ $owner->name }}</b>, the administrator of the business. To activate your account, please verify your email address by clicking the button below.


@component('mail::button',['url'=>$verificationUrl])
        Activate & Verify Email
@endcomponent

Please reset your password at Profile > Update Password. Contact the administrator to get your current password. Or click at [ Forget password ]({{ env('APP_URL') }}/forgot-password) on Login page.

If you think this email is sent to you by mistake, you can ignore it and no further action is required.

@lang('Regards'),<br>{{ config('app.name') }}

@component('mail::subcopy')

If you're having trouble clicking the "Activate & Verify Email" button, copy and paste the URL below into your web browser: <br/><span class="break-all"><a href="{{ $verificationUrl }}">{{ $verificationUrl }}</a></span>

@endcomponent

@endcomponent
