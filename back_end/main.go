package main

import (
	"./box"
)

const (
	version = "0.1.0"
)

func main() {
	box.Box("gilbert server v" + version + " starting on :7777")
}