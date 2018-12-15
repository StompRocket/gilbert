package box

import (
	"strings"
	"fmt"
)

const (
	topL = "╭"
	topR = "╮"
	btmL = "╰"
	btmR = "╯"
	up   = "│"
	side = "─"
)

func Box(content string) {
	length := len(content)

	bar := strings.Repeat(side, length + 2)

	// this is gonna be fun to maintain
	fmt.Printf(`%s%s%s
%s %s %s
%s%s%s
`,  topL, bar, topR, 
    up, content, up, 
    btmL, bar, btmR)
}