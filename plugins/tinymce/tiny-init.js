tinymce.init({
    selector: '#editor',
    height: 500,
    theme: 'modern',
    plugins: 'print preview fullpage searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount tinymcespellchecker a11ychecker imagetools mediaembed  linkchecker contextmenu colorpicker textpattern help',
    toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat | currentdate',
    image_advtab: true,
    templates: [
      { title: 'Test template 1', content: 'Test 1' },
      { title: 'Test template 2', content: 'Test 2' }
    ],
    content_css: [
      '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
      '//www.tinymce.com/css/codepen.min.css'
    ],
    
    setup: function(editor) {
    
        function toTimeHtml(term,date) {
          return '<a href="#" data-toggle="tooltip" data-placement="top" title="' + date + '">' + term + '</a>';
        }
        
        function insertDate() {
          var term = window.prompt("Insert Term");
          var data = window.prompt("Insert Details");
          var html = toTimeHtml(term, data);
          editor.insertContent(html);
        }
    
        editor.addButton('currentdate', {
          icon: 'info',
          tooltip: "Insert Term Definition",
          onclick: insertDate
        });
      }
   });  
