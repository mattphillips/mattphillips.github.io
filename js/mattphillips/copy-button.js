const COPY_BUTTON = '<div class="col-md-1"><button type="button" class="btn btn-primary glyphicon glyphicon-copy copy-button"></button></div>';
const CODE_BLOCK_WIDTH = 'col-md-11';
const ROW_ID_PREFIX = 'code-row-';
const CODE_BLOCK_CLASS = '.highlighter-rouge'

$(function() {
  $(CODE_BLOCK_CLASS).each(function(i) {
    addCopyButtonToCodeBlock(this, i);
  });

  $('.copy-button').click(function() {
    var $codeBlock = extractCodeBlock(this);
    copyCodeToClipboard($codeBlock.text());
  });
});

function addCopyButtonToCodeBlock(block, id) {
  $(block).before(getEmptyCodeRowWithId(id));
  $(block).addClass(CODE_BLOCK_WIDTH);
  $(block).appendTo('#' + ROW_ID_PREFIX + id);
  $(block).after(COPY_BUTTON);
}

function getEmptyCodeRowWithId(id) {
  return '<div class="row" id="' + ROW_ID_PREFIX + id + '"></div>';
}

function copyCodeToClipboard(code) {
  var $temp = $('<input>')
  $('body').append($temp);
  $temp.val(code).select();

  try {
    document.execCommand('copy');
  } catch (err) {
    console.log('Oops, unable to copy');
  }
  $temp.remove();
}

function extractCodeBlock(copyButton) {
  return $(copyButton).parents().children(CODE_BLOCK_CLASS);
}
