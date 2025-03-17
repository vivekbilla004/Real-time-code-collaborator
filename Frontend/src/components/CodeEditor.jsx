import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ language = "javascript", code, setCode }) => {
  return (
    <div className="w-full h-full bg-gray-900 border border-gray-700">
      <Editor
        height="100%"
        width="100%"
        theme="vs-dark"
        language={language}
        value={code}
        onChange={(newCode) => setCode(newCode)}
        options={{
          minimap: { enabled: true },
          fontSize: 14,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
