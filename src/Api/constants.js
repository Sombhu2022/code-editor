export const LANGUAGE_VERSIONS = [
  { name:"javascript", version:"18.15.0" },
  { name:"python", version:"3.10.0" },
  { name:"java", version:"15.0.2" },
  { name:"php", version:"8.2.3" },
  { name:"csharp", version:"6.12.0" },
  { name:"typescript" , version:"5.0.3"},
  // { name: "c++", version: "20" },  // Latest C++ standard (C++20)
  // { name: "c", version: "latest" }, // Aim for latest C standard
];

export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Coder");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Coder" });\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Coder")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Hello Coder';\necho $name;\n",
  c: `// Simple C program to print "Hello World"
  #include <stdio.h>

  int main() {
      printf("Hello World\n");
      return 0;
  }
  `,
  cpp: `// Simple C++ program to print "Hello World" with comments
  #include <iostream>

  int main() {
      // Print a message to the console
      std::cout << "Hello World" << std::endl;
      return 0;
  }
  `,
};
