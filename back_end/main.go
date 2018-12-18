package main

import (
	"github.com/StompRocket/yurt"
	"strconv"
	"strings"
	"os"
	"fmt"
)

const (
	version = "0.1.0"
)

func main() {

	var p yurt.Parser

	p.Command("$d", "Provide port to serve on", func(matches []string) {
		port, err := strconv.Atoi(strings.Trim(matches[0], " \t\n"))
		if err != nil {
			panic("Error parsing port to int")
		}

		yurt.Box(fmt.Sprintf("Gilbert v%s running on :%d", version, port), "")
		
	})

	p.Run(os.Args)
}