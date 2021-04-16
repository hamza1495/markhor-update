@extends('layouts.app')

@section('content')
    @include('components.partials.header')

    {{--@include('components.partials.sidebar')--}}

    @include('components.main-intro')

    @include('components.about-us')

    @include('components.team')

    @include('components.portfolio')

    @include('components.companies')

    @include('components.press')

    @include('components.contact-us')

    @include('components.footer')
@endsection
