<?php

namespace App\Http\Controllers;

use App\Models\invoices;
use App\Http\Requests\StoreinvoicesRequest;
use App\Http\Requests\UpdateinvoicesRequest;

class InvoicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreinvoicesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(invoices $invoices)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(invoices $invoices)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateinvoicesRequest $request, invoices $invoices)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(invoices $invoices)
    {
        //
    }
}
