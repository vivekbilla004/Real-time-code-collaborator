import React, { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";
import { FitAddon } from "xterm-addon-fit";

const TerminalComponent = () => {
  const terminalRef = useRef(null);
  const term = useRef(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    term.current = new Terminal({
      cursorBlink: true,
      fontSize: 14,
      theme: { background: "#1e1e1e", foreground: "#ffffff" },
    });

    const fitAddon = new FitAddon();
    term.current.loadAddon(fitAddon);
    term.current.open(terminalRef.current);
    fitAddon.fit();

    term.current.writeln("Welcome to the Real-Time Code Collab Terminal!");

    return () => term.current.dispose();
  }, []);

  return <div ref={terminalRef} className="w-full h-full bg-black"></div>;
};

export default TerminalComponent;
