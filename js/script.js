const change = () =>{
    let editorField = document.getElementById('editor').value;
    let previewElement = document.getElementById('preview');

    previewElement.innerHTML = marked(editorField);
}

const defaultOnload = () =>{
  let editorField = document.getElementById('editor');
  let previewElement = document.getElementById('preview');

  let defaultHtml = `\
# Welcome to my Markdown Previewer!
## This is a sub-heading...
[You can include links!](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)
<dl>
<dt>Definition list</dt>
<dd>Is something people use sometimes.</dd>

<dt>Markdown in HTML</dt>
<dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`This is an example of inline code\`
\`\`\`
// this is multi-line code //

function exampleOf(){
return multiLineCodeBlock;
}
\`\`\`

> This is an example of a block quote.

**An example of Bolded text**, _italic_ or even ~~cross text out!~~

- We create can create lists.
    - Some are bulleted.
      - We can indent them.

1. And we can create numbered lists.
1. Simply use "1." to create them.
1. We can also use embedded images:

![Web development image](https://img.freepik.com/free-photo/illustration-cosmic-background-with-orange-neon-laser-lights_181624-19567.jpg?w=1060&t=st=1693396841~exp=1693397441~hmac=8631d08426415b1486a91f8caaf96e582fab4297cd7fcc8b3aa0c8657a16a2ef)
`
  
  editorField.value = defaultHtml;
  previewElement.innerHTML = marked(editorField.value)
  
}





