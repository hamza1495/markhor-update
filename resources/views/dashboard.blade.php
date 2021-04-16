@extends('layouts.app')

@section('content')
    <logout></logout>

    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
        @csrf
    </form>
@endsection
