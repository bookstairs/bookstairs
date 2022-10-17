package main

import "embed"

// Embed the static frontend files.
//
//go:embed dist/*
var static embed.FS
