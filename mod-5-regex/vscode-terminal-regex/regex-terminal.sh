# a partir da pasta raiz

find . -name *test.js
find . -name *test.js -not -path "./node_modules/*"

# painel interativo por linha de comando
npm i -g ipt

cp -r  ../../modu-1/aula05/aula05-regex/regex-terminal.sh .

# comando pra ir no terminak no projeto de tdd rent car e substituir pra usar use strict
CONTENT:"'use strict';"
find . -name *.js -not -path '*node_modules' \
| ipt -o \
| xargs -I 'file' sed -i "" -e '1s/^/\'$CONTENT'\/g' {file}