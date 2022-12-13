<template><div id="gist119806966" class="gist">
    <div class="gist-file" translate="no">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
  <div id="file-canalysis-filehandler-py" class="file my-2">
    
    <div itemprop="text" class="Box-body p-0 blob-wrapper data type-python  ">

        
<div class="js-check-bidi js-blob-code-container blob-code-content">

  <template class="js-file-alert-template">
  <div data-view-component="true" class="flash flash-warn flash-full d-flex flex-items-center">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
  
    <span>
      This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.
      <a href="https://github.co/hiddenchars" target="_blank">Learn more about bidirectional Unicode characters</a>
    </span>


  <div data-view-component="true" class="flash-action">        <a href="{{ revealButtonHref }}" data-view-component="true" class="btn-sm btn">    Show hidden characters
</a>
</div>
</div></template>
<template class="js-line-alert-template">
  <span aria-label="This line has hidden Unicode characters" data-view-component="true" class="line-alert tooltipped tooltipped-e">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
</span></template>

  <table data-hpc class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file" data-tab-size="8" data-paste-markdown-skip data-tagsearch-lang="Python" data-tagsearch-path="canalysis.FileHandler.py">
        <tr>
          <td id="file-canalysis-filehandler-py-L1" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="1"></td>
          <td id="file-canalysis-filehandler-py-LC1" class="blob-code blob-code-inner js-file-line"><span class=pl-s>&quot;&quot;&quot;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L2" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="2"></td>
          <td id="file-canalysis-filehandler-py-LC2" class="blob-code blob-code-inner js-file-line"><span class=pl-s>#file_helpers.py</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L3" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="3"></td>
          <td id="file-canalysis-filehandler-py-LC3" class="blob-code blob-code-inner js-file-line"><span class=pl-s>Module(utils/file_helpers): File handling data-container class to keep all file-related</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L4" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="4"></td>
          <td id="file-canalysis-filehandler-py-LC4" class="blob-code blob-code-inner js-file-line"><span class=pl-s>data.</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L5" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="5"></td>
          <td id="file-canalysis-filehandler-py-LC5" class="blob-code blob-code-inner js-file-line"><span class=pl-s>&quot;&quot;&quot;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L6" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="6"></td>
          <td id="file-canalysis-filehandler-py-LC6" class="blob-code blob-code-inner js-file-line"><span class=pl-k>from</span> __future__ <span class=pl-k>import</span> <span class=pl-s1>annotations</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L7" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="7"></td>
          <td id="file-canalysis-filehandler-py-LC7" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L8" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="8"></td>
          <td id="file-canalysis-filehandler-py-LC8" class="blob-code blob-code-inner js-file-line"><span class=pl-k>import</span> <span class=pl-s1>logging</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L9" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="9"></td>
          <td id="file-canalysis-filehandler-py-LC9" class="blob-code blob-code-inner js-file-line"><span class=pl-k>from</span> <span class=pl-s1>collections</span> <span class=pl-k>import</span> <span class=pl-s1>namedtuple</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L10" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="10"></td>
          <td id="file-canalysis-filehandler-py-LC10" class="blob-code blob-code-inner js-file-line"><span class=pl-k>from</span> <span class=pl-s1>pathlib</span> <span class=pl-k>import</span> <span class=pl-v>Path</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L11" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="11"></td>
          <td id="file-canalysis-filehandler-py-LC11" class="blob-code blob-code-inner js-file-line"><span class=pl-k>from</span> <span class=pl-s1>typing</span> <span class=pl-k>import</span> <span class=pl-v>Optional</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L12" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="12"></td>
          <td id="file-canalysis-filehandler-py-LC12" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L13" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="13"></td>
          <td id="file-canalysis-filehandler-py-LC13" class="blob-code blob-code-inner js-file-line"><span class=pl-k>import</span> <span class=pl-s1>pandas</span> <span class=pl-k>as</span> <span class=pl-s1>pd</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L14" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="14"></td>
          <td id="file-canalysis-filehandler-py-LC14" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L15" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="15"></td>
          <td id="file-canalysis-filehandler-py-LC15" class="blob-code blob-code-inner js-file-line"><span class=pl-k>from</span> <span class=pl-s1>helpers</span> <span class=pl-k>import</span> <span class=pl-s1>funcs</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L16" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="16"></td>
          <td id="file-canalysis-filehandler-py-LC16" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L17" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="17"></td>
          <td id="file-canalysis-filehandler-py-LC17" class="blob-code blob-code-inner js-file-line"><span class=pl-s1>logger</span> <span class=pl-c1>=</span> <span class=pl-s1>logging</span>.<span class=pl-en>getLogger</span>(<span class=pl-s1>__name__</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L18" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="18"></td>
          <td id="file-canalysis-filehandler-py-LC18" class="blob-code blob-code-inner js-file-line"><span class=pl-s1>logging</span>.<span class=pl-en>basicConfig</span>(<span class=pl-s1>level</span><span class=pl-c1>=</span><span class=pl-s1>logging</span>.<span class=pl-v>DEBUG</span>, <span class=pl-s1>format</span><span class=pl-c1>=</span><span class=pl-s>&quot;%(message)s&quot;</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L19" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="19"></td>
          <td id="file-canalysis-filehandler-py-LC19" class="blob-code blob-code-inner js-file-line"><span class=pl-s1>logger</span>.<span class=pl-en>setLevel</span>(<span class=pl-s1>logging</span>.<span class=pl-v>DEBUG</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L20" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="20"></td>
          <td id="file-canalysis-filehandler-py-LC20" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L21" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="21"></td>
          <td id="file-canalysis-filehandler-py-LC21" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L22" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="22"></td>
          <td id="file-canalysis-filehandler-py-LC22" class="blob-code blob-code-inner js-file-line"><span class=pl-k>class</span> <span class=pl-v>FileHandler</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L23" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="23"></td>
          <td id="file-canalysis-filehandler-py-LC23" class="blob-code blob-code-inner js-file-line">    <span class=pl-s>&quot;&quot;&quot;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L24" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="24"></td>
          <td id="file-canalysis-filehandler-py-LC24" class="blob-code blob-code-inner js-file-line"><span class=pl-s>    File handler. From directory, return genorator looping through files.</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L25" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="25"></td>
          <td id="file-canalysis-filehandler-py-LC25" class="blob-code blob-code-inner js-file-line"><span class=pl-s>    Parameters:</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L26" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="26"></td>
          <td id="file-canalysis-filehandler-py-LC26" class="blob-code blob-code-inner js-file-line"><span class=pl-s>    ___________</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L27" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="27"></td>
          <td id="file-canalysis-filehandler-py-LC27" class="blob-code blob-code-inner js-file-line"><span class=pl-s>    animal: str</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L28" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="28"></td>
          <td id="file-canalysis-filehandler-py-LC28" class="blob-code blob-code-inner js-file-line"><span class=pl-s>        - Animal ID, letter + number combo</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L29" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="29"></td>
          <td id="file-canalysis-filehandler-py-LC29" class="blob-code blob-code-inner js-file-line"><span class=pl-s>    date: str</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L30" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="30"></td>
          <td id="file-canalysis-filehandler-py-LC30" class="blob-code blob-code-inner js-file-line"><span class=pl-s>        - Session date, all_numeric</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L31" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="31"></td>
          <td id="file-canalysis-filehandler-py-LC31" class="blob-code blob-code-inner js-file-line"><span class=pl-s>    _directory: str</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L32" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="32"></td>
          <td id="file-canalysis-filehandler-py-LC32" class="blob-code blob-code-inner js-file-line"><span class=pl-s>        - Path as str, contains /</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L33" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="33"></td>
          <td id="file-canalysis-filehandler-py-LC33" class="blob-code blob-code-inner js-file-line"><span class=pl-s>    _tracename: Optional[str]</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L34" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="34"></td>
          <td id="file-canalysis-filehandler-py-LC34" class="blob-code blob-code-inner js-file-line"><span class=pl-s>        - Pattern matching to apply for trace files</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L35" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="35"></td>
          <td id="file-canalysis-filehandler-py-LC35" class="blob-code blob-code-inner js-file-line"><span class=pl-s>    _eventname: Optional[str]</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L36" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="36"></td>
          <td id="file-canalysis-filehandler-py-LC36" class="blob-code blob-code-inner js-file-line"><span class=pl-s>        - Pattern matching to apply for event files</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L37" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="37"></td>
          <td id="file-canalysis-filehandler-py-LC37" class="blob-code blob-code-inner js-file-line"><span class=pl-s>    Directory structure:</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L38" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="38"></td>
          <td id="file-canalysis-filehandler-py-LC38" class="blob-code blob-code-inner js-file-line"><span class=pl-s>    ___________</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L39" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="39"></td>
          <td id="file-canalysis-filehandler-py-LC39" class="blob-code blob-code-inner js-file-line"><span class=pl-s>    </span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L40" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="40"></td>
          <td id="file-canalysis-filehandler-py-LC40" class="blob-code blob-code-inner js-file-line"><span class=pl-s>    ./directory</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L41" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="41"></td>
          <td id="file-canalysis-filehandler-py-LC41" class="blob-code blob-code-inner js-file-line"><span class=pl-s>        -| Animal</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L42" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="42"></td>
          <td id="file-canalysis-filehandler-py-LC42" class="blob-code blob-code-inner js-file-line"><span class=pl-s>        --| Date</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L43" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="43"></td>
          <td id="file-canalysis-filehandler-py-LC43" class="blob-code blob-code-inner js-file-line"><span class=pl-s>        ---| Results</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L44" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="44"></td>
          <td id="file-canalysis-filehandler-py-LC44" class="blob-code blob-code-inner js-file-line"><span class=pl-s>        -----| Graphs</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L45" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="45"></td>
          <td id="file-canalysis-filehandler-py-LC45" class="blob-code blob-code-inner js-file-line"><span class=pl-s>        -----| Statistics</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L46" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="46"></td>
          <td id="file-canalysis-filehandler-py-LC46" class="blob-code blob-code-inner js-file-line"><span class=pl-s>        ---| Data_traces*</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L47" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="47"></td>
          <td id="file-canalysis-filehandler-py-LC47" class="blob-code blob-code-inner js-file-line"><span class=pl-s>        ---| Events_gpio (or)</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L48" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="48"></td>
          <td id="file-canalysis-filehandler-py-LC48" class="blob-code blob-code-inner js-file-line"><span class=pl-s>        ---| Events_gpio_processed*</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L49" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="49"></td>
          <td id="file-canalysis-filehandler-py-LC49" class="blob-code blob-code-inner js-file-line"><span class=pl-s>        Use tree() to print current directory tree.</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L50" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="50"></td>
          <td id="file-canalysis-filehandler-py-LC50" class="blob-code blob-code-inner js-file-line"><span class=pl-s>    &quot;&quot;&quot;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L51" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="51"></td>
          <td id="file-canalysis-filehandler-py-LC51" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L52" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="52"></td>
          <td id="file-canalysis-filehandler-py-LC52" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>__init__</span>(</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L53" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="53"></td>
          <td id="file-canalysis-filehandler-py-LC53" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>,</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L54" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="54"></td>
          <td id="file-canalysis-filehandler-py-LC54" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>animal</span>,</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L55" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="55"></td>
          <td id="file-canalysis-filehandler-py-LC55" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>date</span>,</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L56" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="56"></td>
          <td id="file-canalysis-filehandler-py-LC56" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>dir</span>,</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L57" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="57"></td>
          <td id="file-canalysis-filehandler-py-LC57" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>tracename</span>: <span class=pl-v>Optional</span>[<span class=pl-s1>str</span>] <span class=pl-c1>=</span> <span class=pl-s>&quot;traces&quot;</span>,</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L58" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="58"></td>
          <td id="file-canalysis-filehandler-py-LC58" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>eventname</span>: <span class=pl-v>Optional</span>[<span class=pl-s1>str</span>] <span class=pl-c1>=</span> <span class=pl-s>&quot;processed&quot;</span>,</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L59" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="59"></td>
          <td id="file-canalysis-filehandler-py-LC59" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>_gpioname</span>: <span class=pl-v>Optional</span>[<span class=pl-s1>str</span>] <span class=pl-c1>=</span> <span class=pl-s>&quot;gpio.csv&quot;</span>,</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L60" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="60"></td>
          <td id="file-canalysis-filehandler-py-LC60" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>eatingname</span>: <span class=pl-v>Optional</span>[<span class=pl-s1>str</span>] <span class=pl-c1>=</span> <span class=pl-c1>None</span>,</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L61" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="61"></td>
          <td id="file-canalysis-filehandler-py-LC61" class="blob-code blob-code-inner js-file-line">    ) <span class=pl-c1>-&gt;</span> <span class=pl-c1>None</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L62" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="62"></td>
          <td id="file-canalysis-filehandler-py-LC62" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L63" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="63"></td>
          <td id="file-canalysis-filehandler-py-LC63" class="blob-code blob-code-inner js-file-line">        <span class=pl-c># TODO: glob for .csv and .xlxs</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L64" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="64"></td>
          <td id="file-canalysis-filehandler-py-LC64" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-s1>animal</span> <span class=pl-c1>=</span> <span class=pl-s1>animal</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L65" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="65"></td>
          <td id="file-canalysis-filehandler-py-LC65" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-s1>date</span> <span class=pl-c1>=</span> <span class=pl-s1>date</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L66" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="66"></td>
          <td id="file-canalysis-filehandler-py-LC66" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-s1>_directory</span>: <span class=pl-v>Path</span> <span class=pl-c1>=</span> <span class=pl-v>Path</span>(<span class=pl-s1>dir</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L67" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="67"></td>
          <td id="file-canalysis-filehandler-py-LC67" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-s1>_tracename</span>: <span class=pl-v>Optional</span>[<span class=pl-s1>str</span>] <span class=pl-c1>=</span> <span class=pl-s1>tracename</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L68" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="68"></td>
          <td id="file-canalysis-filehandler-py-LC68" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-s1>_eventname</span>: <span class=pl-v>Optional</span>[<span class=pl-s1>str</span>] <span class=pl-c1>=</span> <span class=pl-s1>eventname</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L69" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="69"></td>
          <td id="file-canalysis-filehandler-py-LC69" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-s1>_gpioname</span>: <span class=pl-v>Optional</span>[<span class=pl-s1>str</span>] <span class=pl-c1>=</span> <span class=pl-s1>_gpioname</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L70" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="70"></td>
          <td id="file-canalysis-filehandler-py-LC70" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-s1>_eatingname</span>: <span class=pl-v>Optional</span>[<span class=pl-s1>str</span>] <span class=pl-c1>=</span> <span class=pl-s1>eatingname</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L71" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="71"></td>
          <td id="file-canalysis-filehandler-py-LC71" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L72" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="72"></td>
          <td id="file-canalysis-filehandler-py-LC72" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-s1>color_dict</span>: <span class=pl-s1>namedtuple</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L73" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="73"></td>
          <td id="file-canalysis-filehandler-py-LC73" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-en>_validate</span>()</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L74" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="74"></td>
          <td id="file-canalysis-filehandler-py-LC74" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L75" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="75"></td>
          <td id="file-canalysis-filehandler-py-LC75" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-s1>session</span>: <span class=pl-s1>str</span> <span class=pl-c1>=</span> <span class=pl-s>f&quot;<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>animal</span><span class=pl-kos>}</span></span>_<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>date</span><span class=pl-kos>}</span></span>&quot;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L76" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="76"></td>
          <td id="file-canalysis-filehandler-py-LC76" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-s1>animaldir</span>: <span class=pl-v>Path</span> <span class=pl-c1>=</span> <span class=pl-v>Path</span>(<span class=pl-s1>self</span>.<span class=pl-s1>_directory</span> <span class=pl-c1>/</span> <span class=pl-s1>self</span>.<span class=pl-s1>animal</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L77" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="77"></td>
          <td id="file-canalysis-filehandler-py-LC77" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span>: <span class=pl-v>Path</span> <span class=pl-c1>=</span> <span class=pl-v>Path</span>(<span class=pl-s1>self</span>.<span class=pl-s1>animaldir</span> <span class=pl-c1>/</span> <span class=pl-s1>self</span>.<span class=pl-s1>date</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L78" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="78"></td>
          <td id="file-canalysis-filehandler-py-LC78" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-c1>not</span> <span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span>.<span class=pl-en>is_dir</span>():</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L79" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="79"></td>
          <td id="file-canalysis-filehandler-py-LC79" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>raise</span> <span class=pl-v>NotADirectoryError</span>(<span class=pl-s>f&quot;Directory &#39;<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span><span class=pl-kos>}</span></span>&#39; is not a valid directory or it does not exist, &quot;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L80" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="80"></td>
          <td id="file-canalysis-filehandler-py-LC80" class="blob-code blob-code-inner js-file-line">                                     <span class=pl-s>f&quot;check params.yaml Directory entry.&quot;</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L81" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="81"></td>
          <td id="file-canalysis-filehandler-py-LC81" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-s1>_gpio_file</span>: <span class=pl-v>Optional</span>[<span class=pl-s1>bool</span>] <span class=pl-c1>=</span> <span class=pl-c1>False</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L82" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="82"></td>
          <td id="file-canalysis-filehandler-py-LC82" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-en>_make_dirs</span>()</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L83" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="83"></td>
          <td id="file-canalysis-filehandler-py-LC83" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L84" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="84"></td>
          <td id="file-canalysis-filehandler-py-LC84" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>_validate</span>(<span class=pl-s1>self</span>):</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L85" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="85"></td>
          <td id="file-canalysis-filehandler-py-LC85" class="blob-code blob-code-inner js-file-line">        <span class=pl-s>&quot;&quot;&quot;Validate format of input data. Raises AttributeErrors for each check.&quot;&quot;&quot;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L86" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="86"></td>
          <td id="file-canalysis-filehandler-py-LC86" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-c1>not</span> <span class=pl-s1>funcs</span>.<span class=pl-en>check_numeric</span>(<span class=pl-s1>self</span>.<span class=pl-s1>date</span>):</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L87" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="87"></td>
          <td id="file-canalysis-filehandler-py-LC87" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>raise</span> <span class=pl-v>AttributeError</span>(<span class=pl-s>f&quot;Date must be all numeric, not <span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>date</span><span class=pl-kos>}</span></span>&quot;</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L88" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="88"></td>
          <td id="file-canalysis-filehandler-py-LC88" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-c1>not</span> <span class=pl-s1>funcs</span>.<span class=pl-en>check_path</span>(<span class=pl-s1>self</span>.<span class=pl-s1>_directory</span>):</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L89" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="89"></td>
          <td id="file-canalysis-filehandler-py-LC89" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>raise</span> <span class=pl-v>AttributeError</span>(<span class=pl-s>f&#39;Directory must contain &quot;/&quot;, not <span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>_directory</span><span class=pl-kos>}</span></span>&#39;</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L90" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="90"></td>
          <td id="file-canalysis-filehandler-py-LC90" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-s1>funcs</span>.<span class=pl-en>check_numeric</span>(<span class=pl-s1>self</span>.<span class=pl-s1>animal</span>) <span class=pl-c1>or</span> <span class=pl-s1>funcs</span>.<span class=pl-en>check_path</span>(<span class=pl-s1>self</span>.<span class=pl-s1>animal</span>):</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L91" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="91"></td>
          <td id="file-canalysis-filehandler-py-LC91" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>raise</span> <span class=pl-v>AttributeError</span>(</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L92" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="92"></td>
          <td id="file-canalysis-filehandler-py-LC92" class="blob-code blob-code-inner js-file-line">                <span class=pl-s>f&quot;Animal must not be only numeric or contain path characters, &quot;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L93" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="93"></td>
          <td id="file-canalysis-filehandler-py-LC93" class="blob-code blob-code-inner js-file-line">                <span class=pl-s>f&quot;<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>animal</span><span class=pl-kos>}</span></span>&quot;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L94" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="94"></td>
          <td id="file-canalysis-filehandler-py-LC94" class="blob-code blob-code-inner js-file-line">            )</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L95" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="95"></td>
          <td id="file-canalysis-filehandler-py-LC95" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L96" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="96"></td>
          <td id="file-canalysis-filehandler-py-LC96" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>@<span class=pl-s1>property</span></span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L97" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="97"></td>
          <td id="file-canalysis-filehandler-py-LC97" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>directory</span>(<span class=pl-s1>self</span>) <span class=pl-c1>-&gt;</span> <span class=pl-v>Path</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L98" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="98"></td>
          <td id="file-canalysis-filehandler-py-LC98" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-s1>self</span>.<span class=pl-s1>_directory</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L99" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="99"></td>
          <td id="file-canalysis-filehandler-py-LC99" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L100" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="100"></td>
          <td id="file-canalysis-filehandler-py-LC100" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>@<span class=pl-s1>directory</span>.<span class=pl-s1>setter</span></span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L101" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="101"></td>
          <td id="file-canalysis-filehandler-py-LC101" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>directory</span>(<span class=pl-s1>self</span>, <span class=pl-s1>new_dir</span>: <span class=pl-s1>str</span>) <span class=pl-c1>-&gt;</span> <span class=pl-c1>None</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L102" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="102"></td>
          <td id="file-canalysis-filehandler-py-LC102" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-s1>_directory</span>: <span class=pl-s1>str</span> <span class=pl-c1>=</span> <span class=pl-s1>new_dir</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L103" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="103"></td>
          <td id="file-canalysis-filehandler-py-LC103" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L104" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="104"></td>
          <td id="file-canalysis-filehandler-py-LC104" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>@<span class=pl-s1>directory</span>.<span class=pl-s1>setter</span></span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L105" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="105"></td>
          <td id="file-canalysis-filehandler-py-LC105" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>directory</span>(<span class=pl-s1>self</span>, <span class=pl-s1>new_dir</span>: <span class=pl-s1>str</span>) <span class=pl-c1>-&gt;</span> <span class=pl-c1>None</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L106" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="106"></td>
          <td id="file-canalysis-filehandler-py-LC106" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-s1>_directory</span>: <span class=pl-s1>str</span> <span class=pl-c1>=</span> <span class=pl-s1>new_dir</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L107" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="107"></td>
          <td id="file-canalysis-filehandler-py-LC107" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L108" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="108"></td>
          <td id="file-canalysis-filehandler-py-LC108" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>@<span class=pl-s1>property</span></span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L109" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="109"></td>
          <td id="file-canalysis-filehandler-py-LC109" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>tracename</span>(<span class=pl-s1>self</span>) <span class=pl-c1>-&gt;</span> <span class=pl-s1>str</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L110" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="110"></td>
          <td id="file-canalysis-filehandler-py-LC110" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-s1>self</span>.<span class=pl-s1>_tracename</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L111" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="111"></td>
          <td id="file-canalysis-filehandler-py-LC111" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L112" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="112"></td>
          <td id="file-canalysis-filehandler-py-LC112" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>@<span class=pl-s1>tracename</span>.<span class=pl-s1>setter</span></span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L113" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="113"></td>
          <td id="file-canalysis-filehandler-py-LC113" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>tracename</span>(<span class=pl-s1>self</span>, <span class=pl-s1>new_tracename</span>: <span class=pl-s1>str</span>) <span class=pl-c1>-&gt;</span> <span class=pl-c1>None</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L114" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="114"></td>
          <td id="file-canalysis-filehandler-py-LC114" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-s1>_tracename</span>: <span class=pl-s1>str</span> <span class=pl-c1>=</span> <span class=pl-s1>new_tracename</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L115" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="115"></td>
          <td id="file-canalysis-filehandler-py-LC115" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L116" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="116"></td>
          <td id="file-canalysis-filehandler-py-LC116" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>@<span class=pl-s1>property</span></span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L117" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="117"></td>
          <td id="file-canalysis-filehandler-py-LC117" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>eventname</span>(<span class=pl-s1>self</span>) <span class=pl-c1>-&gt;</span> <span class=pl-s1>str</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L118" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="118"></td>
          <td id="file-canalysis-filehandler-py-LC118" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-s1>self</span>.<span class=pl-s1>_eventname</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L119" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="119"></td>
          <td id="file-canalysis-filehandler-py-LC119" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L120" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="120"></td>
          <td id="file-canalysis-filehandler-py-LC120" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>@<span class=pl-s1>eventname</span>.<span class=pl-s1>setter</span></span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L121" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="121"></td>
          <td id="file-canalysis-filehandler-py-LC121" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>eventname</span>(<span class=pl-s1>self</span>, <span class=pl-s1>new_eventname</span>: <span class=pl-s1>str</span>) <span class=pl-c1>-&gt;</span> <span class=pl-c1>None</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L122" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="122"></td>
          <td id="file-canalysis-filehandler-py-LC122" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-s1>_eventname</span>: <span class=pl-s1>str</span> <span class=pl-c1>=</span> <span class=pl-s1>new_eventname</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L123" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="123"></td>
          <td id="file-canalysis-filehandler-py-LC123" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L124" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="124"></td>
          <td id="file-canalysis-filehandler-py-LC124" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>@<span class=pl-s1>property</span></span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L125" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="125"></td>
          <td id="file-canalysis-filehandler-py-LC125" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>gpioname</span>(<span class=pl-s1>self</span>) <span class=pl-c1>-&gt;</span> <span class=pl-s1>str</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L126" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="126"></td>
          <td id="file-canalysis-filehandler-py-LC126" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-s1>self</span>.<span class=pl-s1>_gpioname</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L127" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="127"></td>
          <td id="file-canalysis-filehandler-py-LC127" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L128" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="128"></td>
          <td id="file-canalysis-filehandler-py-LC128" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>@<span class=pl-s1>gpioname</span>.<span class=pl-s1>setter</span></span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L129" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="129"></td>
          <td id="file-canalysis-filehandler-py-LC129" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>gpioname</span>(<span class=pl-s1>self</span>, <span class=pl-s1>new_gpioname</span>: <span class=pl-s1>str</span>):</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L130" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="130"></td>
          <td id="file-canalysis-filehandler-py-LC130" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-s1>_gpioname</span>: <span class=pl-s1>str</span> <span class=pl-c1>=</span> <span class=pl-s1>new_gpioname</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L131" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="131"></td>
          <td id="file-canalysis-filehandler-py-LC131" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L132" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="132"></td>
          <td id="file-canalysis-filehandler-py-LC132" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>@<span class=pl-s1>property</span></span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L133" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="133"></td>
          <td id="file-canalysis-filehandler-py-LC133" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>eatingname</span>(<span class=pl-s1>self</span>) <span class=pl-c1>-&gt;</span> <span class=pl-s1>str</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L134" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="134"></td>
          <td id="file-canalysis-filehandler-py-LC134" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-s1>self</span>.<span class=pl-s1>_eatingname</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L135" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="135"></td>
          <td id="file-canalysis-filehandler-py-LC135" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L136" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="136"></td>
          <td id="file-canalysis-filehandler-py-LC136" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>@<span class=pl-s1>eatingname</span>.<span class=pl-s1>setter</span></span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L137" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="137"></td>
          <td id="file-canalysis-filehandler-py-LC137" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>eatingname</span>(<span class=pl-s1>self</span>, <span class=pl-s1>new_eatingname</span>: <span class=pl-s1>str</span>):</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L138" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="138"></td>
          <td id="file-canalysis-filehandler-py-LC138" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-s1>_eatingname</span>: <span class=pl-s1>str</span> <span class=pl-c1>=</span> <span class=pl-s1>new_eatingname</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L139" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="139"></td>
          <td id="file-canalysis-filehandler-py-LC139" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L140" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="140"></td>
          <td id="file-canalysis-filehandler-py-LC140" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>get_traces</span>(<span class=pl-s1>self</span>) <span class=pl-c1>-&gt;</span> <span class=pl-s1>list</span>[<span class=pl-v>Path</span>]:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L141" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="141"></td>
          <td id="file-canalysis-filehandler-py-LC141" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>for</span> <span class=pl-s1>x</span> <span class=pl-c1>in</span> <span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span>.<span class=pl-en>iterdir</span>():</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L142" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="142"></td>
          <td id="file-canalysis-filehandler-py-LC142" class="blob-code blob-code-inner js-file-line">            <span class=pl-en>print</span>(<span class=pl-s1>x</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L143" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="143"></td>
          <td id="file-canalysis-filehandler-py-LC143" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> [<span class=pl-s1>p</span> <span class=pl-k>for</span> <span class=pl-s1>p</span> <span class=pl-c1>in</span> <span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span>.<span class=pl-en>glob</span>(<span class=pl-s>f&quot;*<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>_tracename</span><span class=pl-kos>}</span></span>*.csv&quot;</span>)]</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L144" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="144"></td>
          <td id="file-canalysis-filehandler-py-LC144" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L145" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="145"></td>
          <td id="file-canalysis-filehandler-py-LC145" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>get_events</span>(<span class=pl-s1>self</span>) <span class=pl-c1>-&gt;</span> <span class=pl-s1>list</span>[<span class=pl-v>Path</span>]:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L146" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="146"></td>
          <td id="file-canalysis-filehandler-py-LC146" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> [<span class=pl-s1>p</span> <span class=pl-k>for</span> <span class=pl-s1>p</span> <span class=pl-c1>in</span> <span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span>.<span class=pl-en>glob</span>(<span class=pl-s>f&quot;*<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>_eventname</span><span class=pl-kos>}</span></span>*&quot;</span>)]</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L147" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="147"></td>
          <td id="file-canalysis-filehandler-py-LC147" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L148" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="148"></td>
          <td id="file-canalysis-filehandler-py-LC148" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>get_gpio_files</span>(<span class=pl-s1>self</span>) <span class=pl-c1>-&gt;</span> <span class=pl-s1>list</span>[<span class=pl-v>Path</span>]:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L149" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="149"></td>
          <td id="file-canalysis-filehandler-py-LC149" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> [<span class=pl-s1>p</span> <span class=pl-k>for</span> <span class=pl-s1>p</span> <span class=pl-c1>in</span> <span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span>.<span class=pl-en>glob</span>(<span class=pl-s>f&quot;*<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>_gpioname</span><span class=pl-kos>}</span></span>*&quot;</span>)]</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L150" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="150"></td>
          <td id="file-canalysis-filehandler-py-LC150" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L151" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="151"></td>
          <td id="file-canalysis-filehandler-py-LC151" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>get_eating_files</span>(<span class=pl-s1>self</span>) <span class=pl-c1>-&gt;</span> <span class=pl-s1>list</span>[<span class=pl-v>Path</span>]:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L152" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="152"></td>
          <td id="file-canalysis-filehandler-py-LC152" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> [<span class=pl-s1>p</span> <span class=pl-k>for</span> <span class=pl-s1>p</span> <span class=pl-c1>in</span> <span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span>.<span class=pl-en>glob</span>(<span class=pl-s>f&quot;*<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>_eatingname</span><span class=pl-kos>}</span></span>*&quot;</span>)]</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L153" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="153"></td>
          <td id="file-canalysis-filehandler-py-LC153" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L154" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="154"></td>
          <td id="file-canalysis-filehandler-py-LC154" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>get_tracedata</span>(<span class=pl-s1>self</span>) <span class=pl-c1>-&gt;</span> <span class=pl-s1>pd</span>.<span class=pl-v>DataFrame</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L155" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="155"></td>
          <td id="file-canalysis-filehandler-py-LC155" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>tracefiles</span>: <span class=pl-s1>list</span>[<span class=pl-v>Path</span>] <span class=pl-c1>=</span> <span class=pl-s1>self</span>.<span class=pl-en>get_traces</span>()</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L156" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="156"></td>
          <td id="file-canalysis-filehandler-py-LC156" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-c1>not</span> <span class=pl-s1>tracefiles</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L157" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="157"></td>
          <td id="file-canalysis-filehandler-py-LC157" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>files</span> <span class=pl-c1>=</span> <span class=pl-s1>self</span>.<span class=pl-en>search_files</span>()</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L158" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="158"></td>
          <td id="file-canalysis-filehandler-py-LC158" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>raise</span> <span class=pl-v>FileNotFoundError</span>(</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L159" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="159"></td>
          <td id="file-canalysis-filehandler-py-LC159" class="blob-code blob-code-inner js-file-line">                <span class=pl-s>f&#39;No files in <span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span><span class=pl-kos>}</span></span> matching &quot;<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>_tracename</span><span class=pl-kos>}</span></span>&quot;&#39;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L160" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="160"></td>
          <td id="file-canalysis-filehandler-py-LC160" class="blob-code blob-code-inner js-file-line">                <span class=pl-s>f&quot;Files found: <span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>files</span><span class=pl-kos>}</span></span>&quot;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L161" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="161"></td>
          <td id="file-canalysis-filehandler-py-LC161" class="blob-code blob-code-inner js-file-line">            )</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L162" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="162"></td>
          <td id="file-canalysis-filehandler-py-LC162" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L163" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="163"></td>
          <td id="file-canalysis-filehandler-py-LC163" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-en>len</span>(<span class=pl-s1>tracefiles</span>) <span class=pl-c1>&gt;</span> <span class=pl-c1>1</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L164" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="164"></td>
          <td id="file-canalysis-filehandler-py-LC164" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>logging</span>.<span class=pl-en>info</span>(</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L165" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="165"></td>
          <td id="file-canalysis-filehandler-py-LC165" class="blob-code blob-code-inner js-file-line">                <span class=pl-s>f&#39;Multiple trace-files found in <span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span><span class=pl-kos>}</span></span> matching &quot;&#39;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L166" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="166"></td>
          <td id="file-canalysis-filehandler-py-LC166" class="blob-code blob-code-inner js-file-line">                <span class=pl-s>f&#39;<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>_tracename</span><span class=pl-kos>}</span></span>&quot;:&#39;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L167" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="167"></td>
          <td id="file-canalysis-filehandler-py-LC167" class="blob-code blob-code-inner js-file-line">            )</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L168" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="168"></td>
          <td id="file-canalysis-filehandler-py-LC168" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>for</span> <span class=pl-s1>tracefile</span> <span class=pl-c1>in</span> <span class=pl-s1>tracefiles</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L169" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="169"></td>
          <td id="file-canalysis-filehandler-py-LC169" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>logging</span>.<span class=pl-en>info</span>(<span class=pl-s>f&quot;<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>tracefile</span>.<span class=pl-s1>stem</span><span class=pl-kos>}</span></span>&quot;</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L170" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="170"></td>
          <td id="file-canalysis-filehandler-py-LC170" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-s1>pd</span>.<span class=pl-en>read_csv</span>(<span class=pl-en>str</span>(<span class=pl-s1>tracefiles</span>[<span class=pl-c1>0</span>]), <span class=pl-s1>low_memory</span><span class=pl-c1>=</span><span class=pl-c1>False</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L171" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="171"></td>
          <td id="file-canalysis-filehandler-py-LC171" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L172" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="172"></td>
          <td id="file-canalysis-filehandler-py-LC172" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>get_eventdata</span>(<span class=pl-s1>self</span>) <span class=pl-c1>-&gt;</span> <span class=pl-s1>pd</span>.<span class=pl-v>DataFrame</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L173" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="173"></td>
          <td id="file-canalysis-filehandler-py-LC173" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>eventfiles</span>: <span class=pl-s1>list</span>[<span class=pl-v>Path</span>] <span class=pl-c1>=</span> <span class=pl-s1>self</span>.<span class=pl-en>get_events</span>()</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L174" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="174"></td>
          <td id="file-canalysis-filehandler-py-LC174" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-s1>eventfiles</span> <span class=pl-c1>is</span> <span class=pl-c1>None</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L175" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="175"></td>
          <td id="file-canalysis-filehandler-py-LC175" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>raise</span> <span class=pl-v>FileNotFoundError</span>(</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L176" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="176"></td>
          <td id="file-canalysis-filehandler-py-LC176" class="blob-code blob-code-inner js-file-line">                <span class=pl-s>f&#39;No files in <span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span><span class=pl-kos>}</span></span> matching &quot;<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>_eventname</span><span class=pl-kos>}</span></span>&quot;&#39;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L177" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="177"></td>
          <td id="file-canalysis-filehandler-py-LC177" class="blob-code blob-code-inner js-file-line">            )</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L178" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="178"></td>
          <td id="file-canalysis-filehandler-py-LC178" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-en>len</span>(<span class=pl-s1>eventfiles</span>) <span class=pl-c1>&gt;</span> <span class=pl-c1>1</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L179" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="179"></td>
          <td id="file-canalysis-filehandler-py-LC179" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>logging</span>.<span class=pl-en>info</span>(</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L180" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="180"></td>
          <td id="file-canalysis-filehandler-py-LC180" class="blob-code blob-code-inner js-file-line">                <span class=pl-s>f&#39;Multiple event-files found in <span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span><span class=pl-kos>}</span></span> matching &quot;&#39;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L181" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="181"></td>
          <td id="file-canalysis-filehandler-py-LC181" class="blob-code blob-code-inner js-file-line">                <span class=pl-s>f&#39;<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>_eventname</span><span class=pl-kos>}</span></span>&quot;:&#39;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L182" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="182"></td>
          <td id="file-canalysis-filehandler-py-LC182" class="blob-code blob-code-inner js-file-line">            )</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L183" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="183"></td>
          <td id="file-canalysis-filehandler-py-LC183" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>for</span> <span class=pl-s1>event_file</span> <span class=pl-c1>in</span> <span class=pl-s1>eventfiles</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L184" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="184"></td>
          <td id="file-canalysis-filehandler-py-LC184" class="blob-code blob-code-inner js-file-line">                <span class=pl-s1>logging</span>.<span class=pl-en>info</span>(<span class=pl-s>f&quot;<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>event_file</span><span class=pl-kos>}</span></span>&quot;</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L185" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="185"></td>
          <td id="file-canalysis-filehandler-py-LC185" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-s1>pd</span>.<span class=pl-en>read_csv</span>(<span class=pl-en>str</span>(<span class=pl-s1>eventfiles</span>[<span class=pl-c1>0</span>]), <span class=pl-s1>low_memory</span><span class=pl-c1>=</span><span class=pl-c1>False</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L186" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="186"></td>
          <td id="file-canalysis-filehandler-py-LC186" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L187" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="187"></td>
          <td id="file-canalysis-filehandler-py-LC187" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>get_gpiodata</span>(<span class=pl-s1>self</span>) <span class=pl-c1>-&gt;</span> <span class=pl-s1>pd</span>.<span class=pl-v>DataFrame</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L188" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="188"></td>
          <td id="file-canalysis-filehandler-py-LC188" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>gpiofiles</span>: <span class=pl-s1>list</span>[<span class=pl-v>Path</span>] <span class=pl-c1>=</span> <span class=pl-s1>self</span>.<span class=pl-en>get_gpio_files</span>()</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L189" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="189"></td>
          <td id="file-canalysis-filehandler-py-LC189" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-s1>gpiofiles</span> <span class=pl-c1>is</span> <span class=pl-c1>None</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L190" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="190"></td>
          <td id="file-canalysis-filehandler-py-LC190" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>raise</span> <span class=pl-v>FileNotFoundError</span>(</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L191" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="191"></td>
          <td id="file-canalysis-filehandler-py-LC191" class="blob-code blob-code-inner js-file-line">                <span class=pl-s>f&#39;No files in <span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span><span class=pl-kos>}</span></span> matching &quot;<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>_gpioname</span><span class=pl-kos>}</span></span>&quot;&#39;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L192" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="192"></td>
          <td id="file-canalysis-filehandler-py-LC192" class="blob-code blob-code-inner js-file-line">            )</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L193" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="193"></td>
          <td id="file-canalysis-filehandler-py-LC193" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-en>len</span>(<span class=pl-s1>gpiofiles</span>) <span class=pl-c1>&gt;</span> <span class=pl-c1>1</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L194" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="194"></td>
          <td id="file-canalysis-filehandler-py-LC194" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>self</span>.<span class=pl-s1>_gpio_file</span> <span class=pl-c1>=</span> <span class=pl-c1>True</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L195" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="195"></td>
          <td id="file-canalysis-filehandler-py-LC195" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>logging</span>.<span class=pl-en>info</span>(</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L196" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="196"></td>
          <td id="file-canalysis-filehandler-py-LC196" class="blob-code blob-code-inner js-file-line">                <span class=pl-s>f&#39;Multiple gpio-files found in <span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span><span class=pl-kos>}</span></span> matching &quot;&#39;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L197" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="197"></td>
          <td id="file-canalysis-filehandler-py-LC197" class="blob-code blob-code-inner js-file-line">                <span class=pl-s>f&#39;<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>_gpioname</span><span class=pl-kos>}</span></span>&quot;:&#39;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L198" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="198"></td>
          <td id="file-canalysis-filehandler-py-LC198" class="blob-code blob-code-inner js-file-line">            )</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L199" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="199"></td>
          <td id="file-canalysis-filehandler-py-LC199" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>for</span> <span class=pl-s1>gpio_file</span> <span class=pl-c1>in</span> <span class=pl-s1>gpiofiles</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L200" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="200"></td>
          <td id="file-canalysis-filehandler-py-LC200" class="blob-code blob-code-inner js-file-line">                <span class=pl-s1>logging</span>.<span class=pl-en>info</span>(<span class=pl-s>f&quot;<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>gpio_file</span><span class=pl-kos>}</span></span>&quot;</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L201" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="201"></td>
          <td id="file-canalysis-filehandler-py-LC201" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>logging</span>.<span class=pl-en>info</span>(<span class=pl-s>f&quot;Taking file: <span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>gpiofiles</span>[<span class=pl-c1>0</span>]<span class=pl-kos>}</span></span>&quot;</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L202" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="202"></td>
          <td id="file-canalysis-filehandler-py-LC202" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-s1>pd</span>.<span class=pl-en>read_csv</span>(<span class=pl-en>str</span>(<span class=pl-s1>gpiofiles</span>[<span class=pl-c1>0</span>]), <span class=pl-s1>low_memory</span><span class=pl-c1>=</span><span class=pl-c1>False</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L203" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="203"></td>
          <td id="file-canalysis-filehandler-py-LC203" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L204" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="204"></td>
          <td id="file-canalysis-filehandler-py-LC204" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>get_eatingdata</span>(<span class=pl-s1>self</span>) <span class=pl-c1>-&gt;</span> <span class=pl-s1>pd</span>.<span class=pl-v>DataFrame</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L205" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="205"></td>
          <td id="file-canalysis-filehandler-py-LC205" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>eatingfiles</span>: <span class=pl-s1>list</span>[<span class=pl-v>Path</span>] <span class=pl-c1>=</span> <span class=pl-s1>self</span>.<span class=pl-en>get_eating_files</span>()</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L206" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="206"></td>
          <td id="file-canalysis-filehandler-py-LC206" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-s1>eatingfiles</span> <span class=pl-c1>is</span> <span class=pl-c1>None</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L207" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="207"></td>
          <td id="file-canalysis-filehandler-py-LC207" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>raise</span> <span class=pl-v>FileNotFoundError</span>(</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L208" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="208"></td>
          <td id="file-canalysis-filehandler-py-LC208" class="blob-code blob-code-inner js-file-line">                <span class=pl-s>f&#39;No files in <span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span><span class=pl-kos>}</span></span> matching &quot;<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>_eatingname</span><span class=pl-kos>}</span></span>&quot;&#39;</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L209" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="209"></td>
          <td id="file-canalysis-filehandler-py-LC209" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-en>len</span>(<span class=pl-s1>eatingfiles</span>) <span class=pl-c1>&gt;</span> <span class=pl-c1>1</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L210" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="210"></td>
          <td id="file-canalysis-filehandler-py-LC210" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>logging</span>.<span class=pl-en>info</span>(</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L211" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="211"></td>
          <td id="file-canalysis-filehandler-py-LC211" class="blob-code blob-code-inner js-file-line">                <span class=pl-s>f&#39;Multiple eating-files found in <span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span><span class=pl-kos>}</span></span> matching &quot;&#39;</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L212" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="212"></td>
          <td id="file-canalysis-filehandler-py-LC212" class="blob-code blob-code-inner js-file-line">                <span class=pl-s>f&#39;<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>_eatingname</span><span class=pl-kos>}</span></span>&quot;:&#39;</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L213" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="213"></td>
          <td id="file-canalysis-filehandler-py-LC213" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>for</span> <span class=pl-s1>eating_file</span> <span class=pl-c1>in</span> <span class=pl-s1>eatingfiles</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L214" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="214"></td>
          <td id="file-canalysis-filehandler-py-LC214" class="blob-code blob-code-inner js-file-line">                <span class=pl-s1>logging</span>.<span class=pl-en>info</span>(<span class=pl-s>f&quot;<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>eating_file</span><span class=pl-kos>}</span></span>&quot;</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L215" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="215"></td>
          <td id="file-canalysis-filehandler-py-LC215" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>logging</span>.<span class=pl-en>info</span>(<span class=pl-s>f&quot;Taking file: <span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>eatingfiles</span>[<span class=pl-c1>0</span>]<span class=pl-kos>}</span></span>&quot;</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L216" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="216"></td>
          <td id="file-canalysis-filehandler-py-LC216" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>logging</span>.<span class=pl-en>info</span>(<span class=pl-s>&quot;Eating data set.&quot;</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L217" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="217"></td>
          <td id="file-canalysis-filehandler-py-LC217" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-s1>pd</span>.<span class=pl-en>read_csv</span>(</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L218" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="218"></td>
          <td id="file-canalysis-filehandler-py-LC218" class="blob-code blob-code-inner js-file-line">            <span class=pl-en>str</span>(<span class=pl-s1>eatingfiles</span>[<span class=pl-c1>0</span>]),</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L219" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="219"></td>
          <td id="file-canalysis-filehandler-py-LC219" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>low_memory</span><span class=pl-c1>=</span><span class=pl-c1>False</span>,</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L220" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="220"></td>
          <td id="file-canalysis-filehandler-py-LC220" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>header</span><span class=pl-c1>=</span><span class=pl-c1>0</span>,</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L221" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="221"></td>
          <td id="file-canalysis-filehandler-py-LC221" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>usecols</span><span class=pl-c1>=</span>[<span class=pl-s>&#39;Marker Name&#39;</span>, <span class=pl-s>&#39;TimeStamp&#39;</span>, <span class=pl-s>&#39;TimeStamp2&#39;</span>])</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L222" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="222"></td>
          <td id="file-canalysis-filehandler-py-LC222" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L223" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="223"></td>
          <td id="file-canalysis-filehandler-py-LC223" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>unique_path</span>(<span class=pl-s1>self</span>, <span class=pl-s1>filename</span>) <span class=pl-c1>-&gt;</span> <span class=pl-v>Path</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L224" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="224"></td>
          <td id="file-canalysis-filehandler-py-LC224" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>counter</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L225" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="225"></td>
          <td id="file-canalysis-filehandler-py-LC225" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>while</span> <span class=pl-c1>True</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L226" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="226"></td>
          <td id="file-canalysis-filehandler-py-LC226" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>counter</span> <span class=pl-c1>+=</span> <span class=pl-c1>1</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L227" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="227"></td>
          <td id="file-canalysis-filehandler-py-LC227" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>path</span> <span class=pl-c1>=</span> <span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span> <span class=pl-c1>/</span> <span class=pl-s1>filename</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L228" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="228"></td>
          <td id="file-canalysis-filehandler-py-LC228" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>if</span> <span class=pl-c1>not</span> <span class=pl-s1>path</span>.<span class=pl-en>exists</span>():</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L229" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="229"></td>
          <td id="file-canalysis-filehandler-py-LC229" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>return</span> <span class=pl-s1>path</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L230" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="230"></td>
          <td id="file-canalysis-filehandler-py-LC230" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L231" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="231"></td>
          <td id="file-canalysis-filehandler-py-LC231" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>_make_dirs</span>(<span class=pl-s1>self</span>) <span class=pl-c1>-&gt;</span> <span class=pl-c1>None</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L232" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="232"></td>
          <td id="file-canalysis-filehandler-py-LC232" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span>.<span class=pl-s1>parents</span>[<span class=pl-c1>0</span>].<span class=pl-en>mkdir</span>(<span class=pl-s1>parents</span><span class=pl-c1>=</span><span class=pl-c1>True</span>, <span class=pl-s1>exist_ok</span><span class=pl-c1>=</span><span class=pl-c1>True</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L233" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="233"></td>
          <td id="file-canalysis-filehandler-py-LC233" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-c1>None</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L234" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="234"></td>
          <td id="file-canalysis-filehandler-py-LC234" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L235" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="235"></td>
          <td id="file-canalysis-filehandler-py-LC235" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>get_cwd</span>(<span class=pl-s1>self</span>) <span class=pl-c1>-&gt;</span> <span class=pl-s1>str</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L236" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="236"></td>
          <td id="file-canalysis-filehandler-py-LC236" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-en>str</span>(<span class=pl-s1>self</span>.<span class=pl-s1>_directory</span>.<span class=pl-en>cwd</span>())</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L237" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="237"></td>
          <td id="file-canalysis-filehandler-py-LC237" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L238" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="238"></td>
          <td id="file-canalysis-filehandler-py-LC238" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>get_home_dir</span>(<span class=pl-s1>self</span>) <span class=pl-c1>-&gt;</span> <span class=pl-s1>str</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L239" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="239"></td>
          <td id="file-canalysis-filehandler-py-LC239" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-en>str</span>(<span class=pl-s1>self</span>.<span class=pl-s1>_directory</span>.<span class=pl-en>home</span>())</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L240" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="240"></td>
          <td id="file-canalysis-filehandler-py-LC240" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L241" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="241"></td>
          <td id="file-canalysis-filehandler-py-LC241" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>tree</span>(<span class=pl-s1>self</span>) <span class=pl-c1>-&gt;</span> <span class=pl-c1>None</span>:</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L242" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="242"></td>
          <td id="file-canalysis-filehandler-py-LC242" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>print</span>(<span class=pl-s>f&quot;-|<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>self</span>.<span class=pl-s1>_directory</span><span class=pl-kos>}</span></span>&quot;</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L243" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="243"></td>
          <td id="file-canalysis-filehandler-py-LC243" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>for</span> <span class=pl-s1>path</span> <span class=pl-c1>in</span> <span class=pl-en>sorted</span>(<span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span>.<span class=pl-en>rglob</span>(<span class=pl-s>&quot;[!.]*&quot;</span>)):  <span class=pl-c># exclude .files</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L244" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="244"></td>
          <td id="file-canalysis-filehandler-py-LC244" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>depth</span> <span class=pl-c1>=</span> <span class=pl-en>len</span>(<span class=pl-s1>path</span>.<span class=pl-en>relative_to</span>(<span class=pl-s1>self</span>.<span class=pl-s1>sessiondir</span>).<span class=pl-s1>parts</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L245" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="245"></td>
          <td id="file-canalysis-filehandler-py-LC245" class="blob-code blob-code-inner js-file-line">            <span class=pl-s1>spacer</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;    &quot;</span> <span class=pl-c1>*</span> <span class=pl-s1>depth</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L246" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="246"></td>
          <td id="file-canalysis-filehandler-py-LC246" class="blob-code blob-code-inner js-file-line">            <span class=pl-en>print</span>(<span class=pl-s>f&quot;<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>spacer</span><span class=pl-kos>}</span></span>-|<span class=pl-s1><span class=pl-kos>{</span><span class=pl-s1>path</span>.<span class=pl-s1>name</span><span class=pl-kos>}</span></span>&quot;</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L247" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="247"></td>
          <td id="file-canalysis-filehandler-py-LC247" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>return</span> <span class=pl-c1>None</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L248" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="248"></td>
          <td id="file-canalysis-filehandler-py-LC248" class="blob-code blob-code-inner js-file-line">
</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L249" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="249"></td>
          <td id="file-canalysis-filehandler-py-LC249" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>def</span> <span class=pl-en>search_files</span>(<span class=pl-s1>self</span>):</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L250" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="250"></td>
          <td id="file-canalysis-filehandler-py-LC250" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>dirpath</span> <span class=pl-c1>=</span> <span class=pl-s1>self</span>.<span class=pl-s1>_directory</span></td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L251" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="251"></td>
          <td id="file-canalysis-filehandler-py-LC251" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>assert</span> <span class=pl-s1>dirpath</span>.<span class=pl-en>is_dir</span>()</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L252" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="252"></td>
          <td id="file-canalysis-filehandler-py-LC252" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>file_list</span> <span class=pl-c1>=</span> []</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L253" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="253"></td>
          <td id="file-canalysis-filehandler-py-LC253" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>for</span> <span class=pl-s1>x</span> <span class=pl-c1>in</span> <span class=pl-s1>dirpath</span>.<span class=pl-en>iterdir</span>():</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L254" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="254"></td>
          <td id="file-canalysis-filehandler-py-LC254" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>if</span> <span class=pl-s1>x</span>.<span class=pl-en>is_file</span>():</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L255" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="255"></td>
          <td id="file-canalysis-filehandler-py-LC255" class="blob-code blob-code-inner js-file-line">                <span class=pl-s1>file_list</span>.<span class=pl-en>append</span>(<span class=pl-s1>x</span>)</td>
        </tr>
        <tr>
          <td id="file-canalysis-filehandler-py-L256" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="256"></td>
          <td id="file-canalysis-filehandler-py-LC256" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-s1>file_list</span></td>
        </tr>
  </table>
</div>


    </div>

  </div>
</div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/NeuroPyPy/3993e5d31723085f5cf0752ee135a15f/raw/d5d840e1fc4ece2f1b2be79e2406053ee875799e/canalysis.FileHandler.py" style="float:right">view raw</a>
        <a href="https://gist.github.com/NeuroPyPy/3993e5d31723085f5cf0752ee135a15f#file-canalysis-filehandler-py">
          canalysis.FileHandler.py
        </a>
        hosted with &#10084; by <a href="https://github.com">GitHub</a>
      </div>
    </div>
</div>
</template><script>export default { name: 'Gist' }</script><style>.gist{/*!
 * GitHub Light v0.4.1
 * Copyright (c) 2012 - 2017 GitHub, Inc.
 * Licensed under MIT (https://github.com/primer/github-syntax-theme-generator/blob/master/LICENSE)
 */font-size:16px;color:#333;text-align:left;direction:ltr}.gist{--color-canvas-default-transparent: rgba(255,255,255,0);--color-page-header-bg: #f6f8fa;--color-marketing-icon-primary: #218bff;--color-marketing-icon-secondary: #54aeff;--color-diff-blob-addition-num-text: #24292f;--color-diff-blob-addition-fg: #24292f;--color-diff-blob-addition-num-bg: #ccffd8;--color-diff-blob-addition-line-bg: #e6ffec;--color-diff-blob-addition-word-bg: #abf2bc;--color-diff-blob-deletion-num-text: #24292f;--color-diff-blob-deletion-fg: #24292f;--color-diff-blob-deletion-num-bg: #ffd7d5;--color-diff-blob-deletion-line-bg: #ffebe9;--color-diff-blob-deletion-word-bg: rgba(255,129,130,0.4);--color-diff-blob-hunk-num-bg: rgba(84,174,255,0.4);--color-diff-blob-expander-icon: #57606a;--color-diff-blob-selected-line-highlight-mix-blend-mode: multiply;--color-diffstat-deletion-border: rgba(27,31,36,0.15);--color-diffstat-addition-border: rgba(27,31,36,0.15);--color-diffstat-addition-bg: #2da44e;--color-search-keyword-hl: #fff8c5;--color-prettylights-syntax-comment: #6e7781;--color-prettylights-syntax-constant: #0550ae;--color-prettylights-syntax-entity: #8250df;--color-prettylights-syntax-storage-modifier-import: #24292f;--color-prettylights-syntax-entity-tag: #116329;--color-prettylights-syntax-keyword: #cf222e;--color-prettylights-syntax-string: #0a3069;--color-prettylights-syntax-variable: #953800;--color-prettylights-syntax-brackethighlighter-unmatched: #82071e;--color-prettylights-syntax-invalid-illegal-text: #f6f8fa;--color-prettylights-syntax-invalid-illegal-bg: #82071e;--color-prettylights-syntax-carriage-return-text: #f6f8fa;--color-prettylights-syntax-carriage-return-bg: #cf222e;--color-prettylights-syntax-string-regexp: #116329;--color-prettylights-syntax-markup-list: #3b2300;--color-prettylights-syntax-markup-heading: #0550ae;--color-prettylights-syntax-markup-italic: #24292f;--color-prettylights-syntax-markup-bold: #24292f;--color-prettylights-syntax-markup-deleted-text: #82071e;--color-prettylights-syntax-markup-deleted-bg: #ffebe9;--color-prettylights-syntax-markup-inserted-text: #116329;--color-prettylights-syntax-markup-inserted-bg: #dafbe1;--color-prettylights-syntax-markup-changed-text: #953800;--color-prettylights-syntax-markup-changed-bg: #ffd8b5;--color-prettylights-syntax-markup-ignored-text: #eaeef2;--color-prettylights-syntax-markup-ignored-bg: #0550ae;--color-prettylights-syntax-meta-diff-range: #8250df;--color-prettylights-syntax-brackethighlighter-angle: #57606a;--color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;--color-prettylights-syntax-constant-other-reference-link: #0a3069;--color-codemirror-text: #24292f;--color-codemirror-bg: #ffffff;--color-codemirror-gutters-bg: #ffffff;--color-codemirror-guttermarker-text: #ffffff;--color-codemirror-guttermarker-subtle-text: #6e7781;--color-codemirror-linenumber-text: #57606a;--color-codemirror-cursor: #24292f;--color-codemirror-selection-bg: rgba(84,174,255,0.4);--color-codemirror-activeline-bg: rgba(234,238,242,0.5);--color-codemirror-matchingbracket-text: #24292f;--color-codemirror-lines-bg: #ffffff;--color-codemirror-syntax-comment: #24292f;--color-codemirror-syntax-constant: #0550ae;--color-codemirror-syntax-entity: #8250df;--color-codemirror-syntax-keyword: #cf222e;--color-codemirror-syntax-storage: #cf222e;--color-codemirror-syntax-string: #0a3069;--color-codemirror-syntax-support: #0550ae;--color-codemirror-syntax-variable: #953800;--color-checks-bg: #24292f;--color-checks-run-border-width: 0px;--color-checks-container-border-width: 0px;--color-checks-text-primary: #f6f8fa;--color-checks-text-secondary: #8c959f;--color-checks-text-link: #54aeff;--color-checks-btn-icon: #afb8c1;--color-checks-btn-hover-icon: #f6f8fa;--color-checks-btn-hover-bg: rgba(255,255,255,0.125);--color-checks-input-text: #eaeef2;--color-checks-input-placeholder-text: #8c959f;--color-checks-input-focus-text: #8c959f;--color-checks-input-bg: #32383f;--color-checks-input-shadow: none;--color-checks-donut-error: #fa4549;--color-checks-donut-pending: #bf8700;--color-checks-donut-success: #2da44e;--color-checks-donut-neutral: #afb8c1;--color-checks-dropdown-text: #afb8c1;--color-checks-dropdown-bg: #32383f;--color-checks-dropdown-border: #424a53;--color-checks-dropdown-shadow: rgba(27,31,36,0.3);--color-checks-dropdown-hover-text: #f6f8fa;--color-checks-dropdown-hover-bg: #424a53;--color-checks-dropdown-btn-hover-text: #f6f8fa;--color-checks-dropdown-btn-hover-bg: #32383f;--color-checks-scrollbar-thumb-bg: #57606a;--color-checks-header-label-text: #d0d7de;--color-checks-header-label-open-text: #f6f8fa;--color-checks-header-border: #32383f;--color-checks-header-icon: #8c959f;--color-checks-line-text: #d0d7de;--color-checks-line-num-text: rgba(140,149,159,0.75);--color-checks-line-timestamp-text: #8c959f;--color-checks-line-hover-bg: #32383f;--color-checks-line-selected-bg: rgba(33,139,255,0.15);--color-checks-line-selected-num-text: #54aeff;--color-checks-line-dt-fm-text: #24292f;--color-checks-line-dt-fm-bg: #9a6700;--color-checks-gate-bg: rgba(125,78,0,0.15);--color-checks-gate-text: #d0d7de;--color-checks-gate-waiting-text: #d4a72c;--color-checks-step-header-open-bg: #32383f;--color-checks-step-error-text: #ff8182;--color-checks-step-warning-text: #d4a72c;--color-checks-logline-text: #8c959f;--color-checks-logline-num-text: rgba(140,149,159,0.75);--color-checks-logline-debug-text: #c297ff;--color-checks-logline-error-text: #d0d7de;--color-checks-logline-error-num-text: #ff8182;--color-checks-logline-error-bg: rgba(164,14,38,0.15);--color-checks-logline-warning-text: #d0d7de;--color-checks-logline-warning-num-text: #d4a72c;--color-checks-logline-warning-bg: rgba(125,78,0,0.15);--color-checks-logline-command-text: #54aeff;--color-checks-logline-section-text: #4ac26b;--color-checks-ansi-black: #24292f;--color-checks-ansi-black-bright: #32383f;--color-checks-ansi-white: #d0d7de;--color-checks-ansi-white-bright: #d0d7de;--color-checks-ansi-gray: #8c959f;--color-checks-ansi-red: #ff8182;--color-checks-ansi-red-bright: #ffaba8;--color-checks-ansi-green: #4ac26b;--color-checks-ansi-green-bright: #6fdd8b;--color-checks-ansi-yellow: #d4a72c;--color-checks-ansi-yellow-bright: #eac54f;--color-checks-ansi-blue: #54aeff;--color-checks-ansi-blue-bright: #80ccff;--color-checks-ansi-magenta: #c297ff;--color-checks-ansi-magenta-bright: #d8b9ff;--color-checks-ansi-cyan: #76e3ea;--color-checks-ansi-cyan-bright: #b3f0ff;--color-project-header-bg: #24292f;--color-project-sidebar-bg: #ffffff;--color-project-gradient-in: #ffffff;--color-project-gradient-out: rgba(255,255,255,0);--color-mktg-btn-bg: #1b1f23;--color-mktg-btn-shadow-outline: rgb(0 0 0 / 15%) 0 0 0 1px inset;--color-mktg-btn-shadow-focus: rgb(0 0 0 / 15%) 0 0 0 4px;--color-mktg-btn-shadow-hover: 0 3px 2px rgba(0, 0, 0, 0.07), 0 7px 5px rgba(0, 0, 0, 0.04), 0 12px 10px rgba(0, 0, 0, 0.03), 0 22px 18px rgba(0, 0, 0, 0.03), 0 42px 33px rgba(0, 0, 0, 0.02), 0 100px 80px rgba(0, 0, 0, 0.02);--color-mktg-btn-shadow-hover-muted: rgb(0 0 0 / 70%) 0 0 0 2px inset;--color-avatar-bg: #ffffff;--color-avatar-border: rgba(27,31,36,0.15);--color-avatar-stack-fade: #afb8c1;--color-avatar-stack-fade-more: #d0d7de;--color-avatar-child-shadow: -2px -2px 0 rgba(255,255,255,0.8);--color-topic-tag-border: rgba(0,0,0,0);--color-counter-border: rgba(0,0,0,0);--color-select-menu-backdrop-border: rgba(0,0,0,0);--color-select-menu-tap-highlight: rgba(175,184,193,0.5);--color-select-menu-tap-focus-bg: #b6e3ff;--color-overlay-shadow: 0 1px 3px rgba(27,31,36,0.12), 0 8px 24px rgba(66,74,83,0.12);--color-header-text: rgba(255,255,255,0.7);--color-header-bg: #24292f;--color-header-divider: #57606a;--color-header-logo: #ffffff;--color-header-search-bg: #24292f;--color-header-search-border: #57606a;--color-sidenav-selected-bg: #ffffff;--color-menu-bg-active: rgba(0,0,0,0);--color-input-disabled-bg: rgba(175,184,193,0.2);--color-timeline-badge-bg: #eaeef2;--color-ansi-black: #24292f;--color-ansi-black-bright: #57606a;--color-ansi-white: #6e7781;--color-ansi-white-bright: #8c959f;--color-ansi-gray: #6e7781;--color-ansi-red: #cf222e;--color-ansi-red-bright: #a40e26;--color-ansi-green: #116329;--color-ansi-green-bright: #1a7f37;--color-ansi-yellow: #4d2d00;--color-ansi-yellow-bright: #633c01;--color-ansi-blue: #0969da;--color-ansi-blue-bright: #218bff;--color-ansi-magenta: #8250df;--color-ansi-magenta-bright: #a475f9;--color-ansi-cyan: #1b7c83;--color-ansi-cyan-bright: #3192aa;--color-btn-text: #24292f;--color-btn-bg: #f6f8fa;--color-btn-border: rgba(27,31,36,0.15);--color-btn-shadow: 0 1px 0 rgba(27,31,36,0.04);--color-btn-inset-shadow: inset 0 1px 0 rgba(255,255,255,0.25);--color-btn-hover-bg: #f3f4f6;--color-btn-hover-border: rgba(27,31,36,0.15);--color-btn-active-bg: hsla(220,14%,93%,1);--color-btn-active-border: rgba(27,31,36,0.15);--color-btn-selected-bg: hsla(220,14%,94%,1);--color-btn-focus-bg: #f6f8fa;--color-btn-focus-border: rgba(27,31,36,0.15);--color-btn-focus-shadow: 0 0 0 3px rgba(9,105,218,0.3);--color-btn-shadow-active: inset 0 0.15em 0.3em rgba(27,31,36,0.15);--color-btn-shadow-input-focus: 0 0 0 0.2em rgba(9,105,218,0.3);--color-btn-counter-bg: rgba(27,31,36,0.08);--color-btn-primary-text: #ffffff;--color-btn-primary-bg: #2da44e;--color-btn-primary-border: rgba(27,31,36,0.15);--color-btn-primary-shadow: 0 1px 0 rgba(27,31,36,0.1);--color-btn-primary-inset-shadow: inset 0 1px 0 rgba(255,255,255,0.03);--color-btn-primary-hover-bg: #2c974b;--color-btn-primary-hover-border: rgba(27,31,36,0.15);--color-btn-primary-selected-bg: hsla(137,55%,36%,1);--color-btn-primary-selected-shadow: inset 0 1px 0 rgba(0,45,17,0.2);--color-btn-primary-disabled-text: rgba(255,255,255,0.8);--color-btn-primary-disabled-bg: #94d3a2;--color-btn-primary-disabled-border: rgba(27,31,36,0.15);--color-btn-primary-focus-bg: #2da44e;--color-btn-primary-focus-border: rgba(27,31,36,0.15);--color-btn-primary-focus-shadow: 0 0 0 3px rgba(45,164,78,0.4);--color-btn-primary-icon: rgba(255,255,255,0.8);--color-btn-primary-counter-bg: rgba(255,255,255,0.2);--color-btn-outline-text: #0969da;--color-btn-outline-hover-text: #ffffff;--color-btn-outline-hover-bg: #0969da;--color-btn-outline-hover-border: rgba(27,31,36,0.15);--color-btn-outline-hover-shadow: 0 1px 0 rgba(27,31,36,0.1);--color-btn-outline-hover-inset-shadow: inset 0 1px 0 rgba(255,255,255,0.03);--color-btn-outline-hover-counter-bg: rgba(255,255,255,0.2);--color-btn-outline-selected-text: #ffffff;--color-btn-outline-selected-bg: hsla(212,92%,42%,1);--color-btn-outline-selected-border: rgba(27,31,36,0.15);--color-btn-outline-selected-shadow: inset 0 1px 0 rgba(0,33,85,0.2);--color-btn-outline-disabled-text: rgba(9,105,218,0.5);--color-btn-outline-disabled-bg: #f6f8fa;--color-btn-outline-disabled-counter-bg: rgba(9,105,218,0.05);--color-btn-outline-focus-border: rgba(27,31,36,0.15);--color-btn-outline-focus-shadow: 0 0 0 3px rgba(5,80,174,0.4);--color-btn-outline-counter-bg: rgba(9,105,218,0.1);--color-btn-danger-text: #cf222e;--color-btn-danger-hover-text: #ffffff;--color-btn-danger-hover-bg: #a40e26;--color-btn-danger-hover-border: rgba(27,31,36,0.15);--color-btn-danger-hover-shadow: 0 1px 0 rgba(27,31,36,0.1);--color-btn-danger-hover-inset-shadow: inset 0 1px 0 rgba(255,255,255,0.03);--color-btn-danger-hover-counter-bg: rgba(255,255,255,0.2);--color-btn-danger-selected-text: #ffffff;--color-btn-danger-selected-bg: hsla(356,72%,44%,1);--color-btn-danger-selected-border: rgba(27,31,36,0.15);--color-btn-danger-selected-shadow: inset 0 1px 0 rgba(76,0,20,0.2);--color-btn-danger-disabled-text: rgba(207,34,46,0.5);--color-btn-danger-disabled-bg: #f6f8fa;--color-btn-danger-disabled-counter-bg: rgba(207,34,46,0.05);--color-btn-danger-focus-border: rgba(27,31,36,0.15);--color-btn-danger-focus-shadow: 0 0 0 3px rgba(164,14,38,0.4);--color-btn-danger-counter-bg: rgba(207,34,46,0.1);--color-btn-danger-icon: #cf222e;--color-btn-danger-hover-icon: #ffffff;--color-underlinenav-icon: #6e7781;--color-underlinenav-border-hover: rgba(175,184,193,0.2);--color-action-list-item-inline-divider: rgba(208,215,222,0.48);--color-action-list-item-default-hover-bg: rgba(208,215,222,0.32);--color-action-list-item-default-hover-border: rgba(0,0,0,0);--color-action-list-item-default-active-bg: rgba(208,215,222,0.48);--color-action-list-item-default-active-border: rgba(0,0,0,0);--color-action-list-item-default-selected-bg: rgba(208,215,222,0.24);--color-action-list-item-danger-hover-bg: rgba(255,235,233,0.64);--color-action-list-item-danger-active-bg: #ffebe9;--color-action-list-item-danger-hover-text: #cf222e;--color-switch-track-bg: #eaeef2;--color-switch-track-border: #afb8c1;--color-switch-track-checked-bg: #ddf4ff;--color-switch-track-checked-hover-bg: #b6e3ff;--color-switch-track-checked-active-bg: #80ccff;--color-switch-track-checked-border: #54aeff;--color-switch-knob-checked-bg: #0969da;--color-switch-knob-checked-disabled-bg: #6e7781;--color-segmented-control-bg: #eaeef2;--color-segmented-control-button-hover-bg: rgba(175,184,193,0.2);--color-segmented-control-button-active-bg: rgba(175,184,193,0.4);--color-segmented-control-button-selected-border: #6e7781;--color-tree-view-item-chevron-hover-bg: rgba(208,215,222,0.32);--color-tree-view-item-directory-fill: #54aeff;--color-fg-default: #24292f;--color-fg-muted: #57606a;--color-fg-subtle: #6e7781;--color-fg-on-emphasis: #ffffff;--color-canvas-default: #ffffff;--color-canvas-overlay: #ffffff;--color-canvas-inset: #f6f8fa;--color-canvas-subtle: #f6f8fa;--color-border-default: #d0d7de;--color-border-muted: hsla(210,18%,87%,1);--color-border-subtle: rgba(27,31,36,0.15);--color-shadow-small: 0 1px 0 rgba(27,31,36,0.04);--color-shadow-medium: 0 3px 6px rgba(140,149,159,0.15);--color-shadow-large: 0 8px 24px rgba(140,149,159,0.2);--color-shadow-extra-large: 0 12px 28px rgba(140,149,159,0.3);--color-neutral-emphasis-plus: #24292f;--color-neutral-emphasis: #6e7781;--color-neutral-muted: rgba(175,184,193,0.2);--color-neutral-subtle: rgba(234,238,242,0.5);--color-accent-fg: #0969da;--color-accent-emphasis: #0969da;--color-accent-muted: rgba(84,174,255,0.4);--color-accent-subtle: #ddf4ff;--color-success-fg: #1a7f37;--color-success-emphasis: #2da44e;--color-success-muted: rgba(74,194,107,0.4);--color-success-subtle: #dafbe1;--color-attention-fg: #9a6700;--color-attention-emphasis: #bf8700;--color-attention-muted: rgba(212,167,44,0.4);--color-attention-subtle: #fff8c5;--color-severe-fg: #bc4c00;--color-severe-emphasis: #bc4c00;--color-severe-muted: rgba(251,143,68,0.4);--color-severe-subtle: #fff1e5;--color-danger-fg: #cf222e;--color-danger-emphasis: #cf222e;--color-danger-muted: rgba(255,129,130,0.4);--color-danger-subtle: #ffebe9;--color-open-fg: #1a7f37;--color-open-emphasis: #2da44e;--color-open-muted: rgba(74,194,107,0.4);--color-open-subtle: #dafbe1;--color-closed-fg: #cf222e;--color-closed-emphasis: #cf222e;--color-closed-muted: rgba(255,129,130,0.4);--color-closed-subtle: #ffebe9;--color-done-fg: #8250df;--color-done-emphasis: #8250df;--color-done-muted: rgba(194,151,255,0.4);--color-done-subtle: #fbefff;--color-sponsors-fg: #bf3989;--color-sponsors-emphasis: #bf3989;--color-sponsors-muted: rgba(255,128,200,0.4);--color-sponsors-subtle: #ffeff7;--color-primer-fg-disabled: #8c959f;--color-primer-canvas-backdrop: rgba(27,31,36,0.5);--color-primer-canvas-sticky: rgba(255,255,255,0.95);--color-primer-border-active: #fd8c73;--color-primer-border-contrast: rgba(27,31,36,0.1);--color-primer-shadow-highlight: inset 0 1px 0 rgba(255,255,255,0.25);--color-primer-shadow-inset: inset 0 1px 0 rgba(208,215,222,0.2);--color-primer-shadow-focus: 0 0 0 3px rgba(9,105,218,0.3);--color-scale-black: #1b1f24;--color-scale-white: #ffffff;--color-scale-gray-0: #f6f8fa;--color-scale-gray-1: #eaeef2;--color-scale-gray-2: #d0d7de;--color-scale-gray-3: #afb8c1;--color-scale-gray-4: #8c959f;--color-scale-gray-5: #6e7781;--color-scale-gray-6: #57606a;--color-scale-gray-7: #424a53;--color-scale-gray-8: #32383f;--color-scale-gray-9: #24292f;--color-scale-blue-0: #ddf4ff;--color-scale-blue-1: #b6e3ff;--color-scale-blue-2: #80ccff;--color-scale-blue-3: #54aeff;--color-scale-blue-4: #218bff;--color-scale-blue-5: #0969da;--color-scale-blue-6: #0550ae;--color-scale-blue-7: #033d8b;--color-scale-blue-8: #0a3069;--color-scale-blue-9: #002155;--color-scale-green-0: #dafbe1;--color-scale-green-1: #aceebb;--color-scale-green-2: #6fdd8b;--color-scale-green-3: #4ac26b;--color-scale-green-4: #2da44e;--color-scale-green-5: #1a7f37;--color-scale-green-6: #116329;--color-scale-green-7: #044f1e;--color-scale-green-8: #003d16;--color-scale-green-9: #002d11;--color-scale-yellow-0: #fff8c5;--color-scale-yellow-1: #fae17d;--color-scale-yellow-2: #eac54f;--color-scale-yellow-3: #d4a72c;--color-scale-yellow-4: #bf8700;--color-scale-yellow-5: #9a6700;--color-scale-yellow-6: #7d4e00;--color-scale-yellow-7: #633c01;--color-scale-yellow-8: #4d2d00;--color-scale-yellow-9: #3b2300;--color-scale-orange-0: #fff1e5;--color-scale-orange-1: #ffd8b5;--color-scale-orange-2: #ffb77c;--color-scale-orange-3: #fb8f44;--color-scale-orange-4: #e16f24;--color-scale-orange-5: #bc4c00;--color-scale-orange-6: #953800;--color-scale-orange-7: #762c00;--color-scale-orange-8: #5c2200;--color-scale-orange-9: #471700;--color-scale-red-0: #ffebe9;--color-scale-red-1: #ffcecb;--color-scale-red-2: #ffaba8;--color-scale-red-3: #ff8182;--color-scale-red-4: #fa4549;--color-scale-red-5: #cf222e;--color-scale-red-6: #a40e26;--color-scale-red-7: #82071e;--color-scale-red-8: #660018;--color-scale-red-9: #4c0014;--color-scale-purple-0: #fbefff;--color-scale-purple-1: #ecd8ff;--color-scale-purple-2: #d8b9ff;--color-scale-purple-3: #c297ff;--color-scale-purple-4: #a475f9;--color-scale-purple-5: #8250df;--color-scale-purple-6: #6639ba;--color-scale-purple-7: #512a97;--color-scale-purple-8: #3e1f79;--color-scale-purple-9: #2e1461;--color-scale-pink-0: #ffeff7;--color-scale-pink-1: #ffd3eb;--color-scale-pink-2: #ffadda;--color-scale-pink-3: #ff80c8;--color-scale-pink-4: #e85aad;--color-scale-pink-5: #bf3989;--color-scale-pink-6: #99286e;--color-scale-pink-7: #772057;--color-scale-pink-8: #611347;--color-scale-pink-9: #4d0336;--color-scale-coral-0: #fff0eb;--color-scale-coral-1: #ffd6cc;--color-scale-coral-2: #ffb4a1;--color-scale-coral-3: #fd8c73;--color-scale-coral-4: #ec6547;--color-scale-coral-5: #c4432b;--color-scale-coral-6: #9e2f1c;--color-scale-coral-7: #801f0f;--color-scale-coral-8: #691105;--color-scale-coral-9: #510901}.gist .markdown-body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";font-size:16px;line-height:1.5;word-wrap:break-word}.gist .markdown-body::before{display:table;content:""}.gist .markdown-body::after{display:table;clear:both;content:""}.gist .markdown-body>*:first-child{margin-top:0 !important}.gist .markdown-body>*:last-child{margin-bottom:0 !important}.gist .markdown-body a:not([href]){color:inherit;text-decoration:none}.gist .markdown-body .absent{color:var(--color-danger-fg)}.gist .markdown-body .anchor{float:left;padding-right:4px;margin-left:-20px;line-height:1}.gist .markdown-body .anchor:focus{outline:none}.gist .markdown-body p,.gist .markdown-body blockquote,.gist .markdown-body ul,.gist .markdown-body ol,.gist .markdown-body dl,.gist .markdown-body table,.gist .markdown-body pre,.gist .markdown-body details{margin-top:0;margin-bottom:16px}.gist .markdown-body hr{height:.25em;padding:0;margin:24px 0;background-color:var(--color-border-default);border:0}.gist .markdown-body blockquote{padding:0 1em;color:var(--color-fg-muted);border-left:.25em solid var(--color-border-default)}.gist .markdown-body blockquote>:first-child{margin-top:0}.gist .markdown-body blockquote>:last-child{margin-bottom:0}.gist .markdown-body h1,.gist .markdown-body h2,.gist .markdown-body h3,.gist .markdown-body h4,.gist .markdown-body h5,.gist .markdown-body h6{margin-top:24px;margin-bottom:16px;font-weight:var(--base-text-weight-semibold, 600);line-height:1.25}.gist .markdown-body h1 .octicon-link,.gist .markdown-body h2 .octicon-link,.gist .markdown-body h3 .octicon-link,.gist .markdown-body h4 .octicon-link,.gist .markdown-body h5 .octicon-link,.gist .markdown-body h6 .octicon-link{color:var(--color-fg-default);vertical-align:middle;visibility:hidden}.gist .markdown-body h1:hover .anchor,.gist .markdown-body h2:hover .anchor,.gist .markdown-body h3:hover .anchor,.gist .markdown-body h4:hover .anchor,.gist .markdown-body h5:hover .anchor,.gist .markdown-body h6:hover .anchor{text-decoration:none}.gist .markdown-body h1:hover .anchor .octicon-link,.gist .markdown-body h2:hover .anchor .octicon-link,.gist .markdown-body h3:hover .anchor .octicon-link,.gist .markdown-body h4:hover .anchor .octicon-link,.gist .markdown-body h5:hover .anchor .octicon-link,.gist .markdown-body h6:hover .anchor .octicon-link{visibility:visible}.gist .markdown-body h1 tt,.gist .markdown-body h1 code,.gist .markdown-body h2 tt,.gist .markdown-body h2 code,.gist .markdown-body h3 tt,.gist .markdown-body h3 code,.gist .markdown-body h4 tt,.gist .markdown-body h4 code,.gist .markdown-body h5 tt,.gist .markdown-body h5 code,.gist .markdown-body h6 tt,.gist .markdown-body h6 code{padding:0 .2em;font-size:inherit}.gist .markdown-body h1{padding-bottom:.3em;font-size:2em;border-bottom:1px solid var(--color-border-muted)}.gist .markdown-body h2{padding-bottom:.3em;font-size:1.5em;border-bottom:1px solid var(--color-border-muted)}.gist .markdown-body h3{font-size:1.25em}.gist .markdown-body h4{font-size:1em}.gist .markdown-body h5{font-size:.875em}.gist .markdown-body h6{font-size:.85em;color:var(--color-fg-muted)}.gist .markdown-body summary h1,.gist .markdown-body summary h2,.gist .markdown-body summary h3,.gist .markdown-body summary h4,.gist .markdown-body summary h5,.gist .markdown-body summary h6{display:inline-block}.gist .markdown-body summary h1 .anchor,.gist .markdown-body summary h2 .anchor,.gist .markdown-body summary h3 .anchor,.gist .markdown-body summary h4 .anchor,.gist .markdown-body summary h5 .anchor,.gist .markdown-body summary h6 .anchor{margin-left:-40px}.gist .markdown-body summary h1,.gist .markdown-body summary h2{padding-bottom:0;border-bottom:0}.gist .markdown-body ul,.gist .markdown-body ol{padding-left:2em}.gist .markdown-body ul.no-list,.gist .markdown-body ol.no-list{padding:0;list-style-type:none}.gist .markdown-body ol[type=a]{list-style-type:lower-alpha}.gist .markdown-body ol[type=A]{list-style-type:upper-alpha}.gist .markdown-body ol[type=i]{list-style-type:lower-roman}.gist .markdown-body ol[type=I]{list-style-type:upper-roman}.gist .markdown-body ol[type="1"]{list-style-type:decimal}.gist .markdown-body div>ol:not([type]){list-style-type:decimal}.gist .markdown-body ul ul,.gist .markdown-body ul ol,.gist .markdown-body ol ol,.gist .markdown-body ol ul{margin-top:0;margin-bottom:0}.gist .markdown-body li>p{margin-top:16px}.gist .markdown-body li+li{margin-top:.25em}.gist .markdown-body dl{padding:0}.gist .markdown-body dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:var(--base-text-weight-semibold, 600)}.gist .markdown-body dl dd{padding:0 16px;margin-bottom:16px}.gist .markdown-body table{display:block;width:100%;width:max-content;max-width:100%;overflow:auto}.gist .markdown-body table th{font-weight:var(--base-text-weight-semibold, 600)}.gist .markdown-body table th,.gist .markdown-body table td{padding:6px 13px;border:1px solid var(--color-border-default)}.gist .markdown-body table tr{background-color:var(--color-canvas-default);border-top:1px solid var(--color-border-muted)}.gist .markdown-body table tr:nth-child(2n){background-color:var(--color-canvas-subtle)}.gist .markdown-body table img{background-color:transparent}.gist .markdown-body img{max-width:100%;box-sizing:content-box;background-color:var(--color-canvas-default)}.gist .markdown-body img[align=right]{padding-left:20px}.gist .markdown-body img[align=left]{padding-right:20px}.gist .markdown-body .emoji{max-width:none;vertical-align:text-top;background-color:transparent}.gist .markdown-body span.frame{display:block;overflow:hidden}.gist .markdown-body span.frame>span{display:block;float:left;width:auto;padding:7px;margin:13px 0 0;overflow:hidden;border:1px solid var(--color-border-default)}.gist .markdown-body span.frame span img{display:block;float:left}.gist .markdown-body span.frame span span{display:block;padding:5px 0 0;clear:both;color:var(--color-fg-default)}.gist .markdown-body span.align-center{display:block;overflow:hidden;clear:both}.gist .markdown-body span.align-center>span{display:block;margin:13px auto 0;overflow:hidden;text-align:center}.gist .markdown-body span.align-center span img{margin:0 auto;text-align:center}.gist .markdown-body span.align-right{display:block;overflow:hidden;clear:both}.gist .markdown-body span.align-right>span{display:block;margin:13px 0 0;overflow:hidden;text-align:right}.gist .markdown-body span.align-right span img{margin:0;text-align:right}.gist .markdown-body span.float-left{display:block;float:left;margin-right:13px;overflow:hidden}.gist .markdown-body span.float-left span{margin:13px 0 0}.gist .markdown-body span.float-right{display:block;float:right;margin-left:13px;overflow:hidden}.gist .markdown-body span.float-right>span{display:block;margin:13px auto 0;overflow:hidden;text-align:right}.gist .markdown-body code,.gist .markdown-body tt{padding:.2em .4em;margin:0;font-size:85%;background-color:var(--color-neutral-muted);border-radius:6px}.gist .markdown-body code br,.gist .markdown-body tt br{display:none}.gist .markdown-body del code{text-decoration:inherit}.gist .markdown-body samp{font-size:85%}.gist .markdown-body pre{word-wrap:normal}.gist .markdown-body pre code{font-size:100%}.gist .markdown-body pre>code{padding:0;margin:0;word-break:normal;white-space:pre;background:transparent;border:0}.gist .markdown-body .highlight{margin-bottom:16px}.gist .markdown-body .highlight pre{margin-bottom:0;word-break:normal}.gist .markdown-body .highlight pre,.gist .markdown-body pre{padding:16px;overflow:auto;font-size:85%;line-height:1.45;background-color:var(--color-canvas-subtle);border-radius:6px}.gist .markdown-body pre code,.gist .markdown-body pre tt{display:inline;max-width:auto;padding:0;margin:0;overflow:visible;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}.gist .markdown-body .csv-data td,.gist .markdown-body .csv-data th{padding:5px;overflow:hidden;font-size:12px;line-height:1;text-align:left;white-space:nowrap}.gist .markdown-body .csv-data .blob-num{padding:10px 8px 9px;text-align:right;background:var(--color-canvas-default);border:0}.gist .markdown-body .csv-data tr{border-top:0}.gist .markdown-body .csv-data th{font-weight:var(--base-text-weight-semibold, 600);background:var(--color-canvas-subtle);border-top:0}.gist .markdown-body [data-footnote-ref]::before{content:"["}.gist .markdown-body [data-footnote-ref]::after{content:"]"}.gist .markdown-body .footnotes{font-size:12px;color:var(--color-fg-muted);border-top:1px solid var(--color-border-default)}.gist .markdown-body .footnotes ol{padding-left:16px}.gist .markdown-body .footnotes ol ul{display:inline-block;padding-left:16px;margin-top:16px}.gist .markdown-body .footnotes li{position:relative}.gist .markdown-body .footnotes li:target::before{position:absolute;top:-8px;right:-8px;bottom:-8px;left:-24px;pointer-events:none;content:"";border:2px solid var(--color-accent-emphasis);border-radius:6px}.gist .markdown-body .footnotes li:target{color:var(--color-fg-default)}.gist .markdown-body .footnotes .data-footnote-backref g-emoji{font-family:monospace}.gist .pl-c{color:#6a737d}.gist .pl-c1,.gist .pl-s .pl-v{color:#005cc5}.gist .pl-e,.gist .pl-en{color:#6f42c1}.gist .pl-smi,.gist .pl-s .pl-s1{color:#24292e}.gist .pl-ent{color:#22863a}.gist .pl-k{color:#d73a49}.gist .pl-s,.gist .pl-pds,.gist .pl-s .pl-pse .pl-s1,.gist .pl-sr,.gist .pl-sr .pl-cce,.gist .pl-sr .pl-sre,.gist .pl-sr .pl-sra{color:#032f62}.gist .pl-v,.gist .pl-smw{color:#e36209}.gist .pl-bu{color:#b31d28}.gist .pl-ii{color:#fafbfc;background-color:#b31d28}.gist .pl-c2{color:#fafbfc;background-color:#d73a49}.gist .pl-c2::before{content:"^M"}.gist .pl-sr .pl-cce{font-weight:bold;color:#22863a}.gist .pl-ml{color:#735c0f}.gist .pl-mh,.gist .pl-mh .pl-en,.gist .pl-ms{font-weight:bold;color:#005cc5}.gist .pl-mi{font-style:italic;color:#24292e}.gist .pl-mb{font-weight:bold;color:#24292e}.gist .pl-md{color:#b31d28;background-color:#ffeef0}.gist .pl-mi1{color:#22863a;background-color:#f0fff4}.gist .pl-mc{color:#e36209;background-color:#ffebda}.gist .pl-mi2{color:#f6f8fa;background-color:#005cc5}.gist .pl-mdr{font-weight:bold;color:#6f42c1}.gist .pl-ba{color:#586069}.gist .pl-sg{color:#959da5}.gist .pl-corl{text-decoration:underline;color:#032f62}.gist .breadcrumb{font-size:16px;color:var(--color-fg-muted)}.gist .breadcrumb .separator{white-space:pre-wrap}.gist .breadcrumb .separator::before,.gist .breadcrumb .separator::after{content:" "}.gist .breadcrumb strong.final-path{color:var(--color-fg-default)}.gist .blob-interaction-bar{position:relative;background-color:var(--color-canvas-subtle);border-bottom:1px solid var(--color-border-default)}.gist .blob-interaction-bar::before{display:table;content:""}.gist .blob-interaction-bar::after{display:table;clear:both;content:""}.gist .blob-interaction-bar .octicon-search{position:absolute;top:6px;left:10px;font-size:12px;color:var(--color-fg-muted)}.gist .blob-filter{width:100%;padding:4px 16px 4px 32px;font-size:12px;border:0;border-radius:0;outline:none}.gist .blob-filter:focus{outline:none}.gist .TagsearchPopover{width:inherit;max-width:600px}.gist .TagsearchPopover-content{max-height:300px}.gist .TagsearchPopover-list .TagsearchPopover-list-item:hover{background-color:var(--color-canvas-subtle)}.gist .TagsearchPopover-list .TagsearchPopover-list-item .TagsearchPopover-item:hover{text-decoration:none}.gist .TagsearchPopover-list .blob-code-inner{white-space:pre-wrap}.gist .diff-table .line-alert,.gist .blob-code-content .line-alert{position:absolute;left:0;margin:-2px 2px}.gist .diff-table .codeowners-error,.gist .blob-code-content .codeowners-error{color:var(--color-danger-fg)}.gist .diff-table .error-highlight,.gist .blob-code-content .error-highlight{position:relative;cursor:help;font-style:italic;color:var(--color-danger-fg)}.gist .diff-table .error-highlight::before,.gist .blob-code-content .error-highlight::before{position:absolute;top:101%;width:100%;height:.25em;content:"";background:linear-gradient(135deg, transparent, transparent 45%, var(--color-danger-fg), transparent 55%, transparent 100%),linear-gradient(45deg, transparent, transparent 45%, var(--color-danger-fg), transparent 55%, transparent 100%);background-repeat:repeat-x,repeat-x;background-size:.5em .5em}.gist .blob-code-content .blob-num .line-alert{margin-top:1px}.gist .diff-table .blob-num .line-alert{margin:2px -2px}.gist .csv-data .line-alert{position:absolute;margin:2px 4px}.gist .CopyBlock{line-height:20px;cursor:pointer}.gist .CopyBlock .octicon-copy{display:none}.gist .CopyBlock:hover,.gist .CopyBlock:focus,.gist .CopyBlock:active{background-color:var(--color-canvas-default);outline:none}.gist .CopyBlock:hover .octicon-copy,.gist .CopyBlock:focus .octicon-copy,.gist .CopyBlock:active .octicon-copy{display:inline-block}.gist .blob-header.is-stuck{border-top:0;border-top-left-radius:0;border-top-right-radius:0}.gist .blob-wrapper{overflow-x:auto;overflow-y:hidden}.gist .blob-wrapper table tr:nth-child(2n){background-color:transparent}.gist .page-edit-blob.height-full .CodeMirror{height:300px}.gist .page-edit-blob.height-full .CodeMirror,.gist .page-edit-blob.height-full .CodeMirror-scroll{display:flex;flex-direction:column;flex:1 1 auto}.gist .blob-wrapper-embedded{max-height:240px;overflow-y:auto}.gist .diff-table{width:100%;border-collapse:separate}.gist .diff-table .blob-code.blob-code-inner{padding-left:22px}.gist .diff-table .line-comments{padding:10px;vertical-align:top;border-top:1px solid var(--color-border-default)}.gist .diff-table .line-comments:first-child+.empty-cell{border-left-width:1px}.gist .diff-table tr:not(:last-child) .line-comments{border-top:1px solid var(--color-border-default);border-bottom:1px solid var(--color-border-default)}.gist .diff-view .blob-code-marker-context::before,.gist .diff-view .blob-code-marker-injected_context::before,.gist .diff-view .blob-code-marker-addition::before,.gist .diff-view .blob-code-marker-deletion::before{top:4px}.gist .diff-view .line-alert,.gist .diff-table .line-alert{position:absolute;left:-60px;margin:2px}.gist .comment-body .diff-view .line-alert{left:0}.gist .blob-num{position:relative;width:1%;min-width:50px;padding-right:10px;padding-left:10px;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:12px;line-height:20px;color:var(--color-fg-subtle);text-align:right;white-space:nowrap;vertical-align:top;cursor:pointer;-webkit-user-select:none;user-select:none}.gist .blob-num:hover{color:var(--color-fg-default)}.gist .blob-num::before{content:attr(data-line-number)}.gist .blob-num.non-expandable{cursor:default}.gist .blob-num.non-expandable:hover{color:var(--color-fg-subtle)}.gist .blob-num-hidden::before{visibility:hidden}.gist .blob-code{position:relative;padding-right:10px;padding-left:10px;line-height:20px;vertical-align:top}.gist .blob-code-inner{display:table-cell;overflow:visible;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:12px;color:var(--color-fg-default);word-wrap:anywhere;white-space:pre}.gist .blob-code-inner .x-first{border-top-left-radius:.2em;border-bottom-left-radius:.2em}.gist .blob-code-inner .x-last{border-top-right-radius:.2em;border-bottom-right-radius:.2em}.gist .blob-code-inner.highlighted,.gist .blob-code-inner .highlighted{background-color:var(--color-attention-subtle);box-shadow:inset 2px 0 0 var(--color-attention-muted)}.gist .blob-code-inner::selection,.gist .blob-code-inner *::selection{background-color:var(--color-accent-muted)}.gist .blob-code-inner.blob-code-addition,.gist .blob-code-inner.blob-code-deletion{position:relative;padding-left:22px !important}.gist .blob-code-marker::before{position:absolute;top:1px;left:8px;padding-right:8px;content:attr(data-code-marker)}.gist .blob-code-context,.gist .blob-code-addition,.gist .blob-code-deletion{padding-left:22px}.gist .blob-code-marker-addition::before{position:absolute;top:1px;left:8px;content:"+ "}.gist .blob-code-marker-deletion::before{position:absolute;top:1px;left:8px;content:"- "}.gist .blob-code-marker-context::before{position:absolute;top:1px;left:8px;content:"  "}.gist .blob-code-marker-injected_context::before{position:absolute;top:1px;left:8px;content:"  "}.gist .soft-wrap .diff-table{table-layout:fixed}.gist .soft-wrap .blob-code{padding-left:18px;text-indent:0}.gist .soft-wrap .blob-code-inner{white-space:pre-wrap}.gist .soft-wrap .no-nl-marker{display:none}.gist .soft-wrap .add-line-comment{margin-top:0;margin-left:-24px}.gist .soft-wrap .blob-code-context,.gist .soft-wrap .blob-code-addition,.gist .soft-wrap .blob-code-deletion{padding-left:22px;text-indent:0}.gist .blob-num-hunk,.gist .blob-code-hunk,.gist .blob-num-expandable{color:var(--color-fg-muted);vertical-align:middle}.gist .blob-num-hunk,.gist .blob-num-expandable{background-color:var(--color-diff-blob-hunk-num-bg)}.gist .blob-code-hunk{padding-top:4px;padding-bottom:4px;background-color:var(--color-accent-subtle);border-width:1px 0}.gist .blob-expanded .blob-num:not(.blob-num-context-outside-diff),.gist .blob-expanded .blob-code:not(.blob-code-context){background-color:var(--color-canvas-subtle)}.gist .blob-expanded+tr.show-top-border:not(.blob-expanded) .blob-num,.gist .blob-expanded+tr.show-top-border:not(.blob-expanded) .blob-code{border-top:1px solid var(--color-border-muted)}.gist .blob-expanded tr.show-top-border .blob-num-hunk,.gist .blob-expanded tr.show-top-border .blob-num{border-top:1px solid var(--color-border-muted)}.gist tr.show-top-border+.blob-expanded .blob-num,.gist tr.show-top-border+.blob-expanded .blob-code{border-top:1px solid var(--color-border-muted)}.gist .blob-num-expandable{width:auto;padding:0;font-size:12px;text-align:center}.gist .blob-num-expandable .directional-expander{display:block;width:auto;height:auto;margin-right:-1px;color:var(--color-diff-blob-expander-icon);cursor:pointer}.gist .blob-num-expandable .single-expander{padding-top:4px;padding-bottom:4px}.gist .blob-num-expandable .directional-expander:hover{color:var(--color-fg-on-emphasis);text-shadow:none;background-color:var(--color-accent-emphasis);border-color:var(--color-accent-emphasis)}.gist .blob-code-addition{background-color:var(--color-diff-blob-addition-line-bg);outline:1px dotted transparent}.gist .blob-code-addition .x{color:var(--color-diff-blob-addition-fg);background-color:var(--color-diff-blob-addition-word-bg)}.gist .blob-num-addition{color:var(--color-diff-blob-addition-num-text);background-color:var(--color-diff-blob-addition-num-bg);border-color:var(--color-success-emphasis)}.gist .blob-num-addition:hover{color:var(--color-fg-default)}.gist .blob-code-deletion{background-color:var(--color-diff-blob-deletion-line-bg);outline:1px dashed transparent}.gist .blob-code-deletion .x{color:var(--color-diff-blob-deletion-fg);background-color:var(--color-diff-blob-deletion-word-bg)}.gist .blob-num-deletion{color:var(--color-diff-blob-deletion-num-text);background-color:var(--color-diff-blob-deletion-num-bg);border-color:var(--color-danger-emphasis)}.gist .blob-num-deletion:hover{color:var(--color-fg-default)}.gist .is-selecting{cursor:ns-resize !important}.gist .is-selecting .blob-num{cursor:ns-resize !important}.gist .is-selecting .add-line-comment,.gist .is-selecting a{pointer-events:none;cursor:ns-resize !important}.gist .is-selecting .is-hovered .add-line-comment{opacity:0}.gist .is-selecting.file-diff-split{cursor:nwse-resize !important}.gist .is-selecting.file-diff-split .blob-num{cursor:nwse-resize !important}.gist .is-selecting.file-diff-split .empty-cell,.gist .is-selecting.file-diff-split .add-line-comment,.gist .is-selecting.file-diff-split a{pointer-events:none;cursor:nwse-resize !important}.gist .selected-line{position:relative}.gist .selected-line::after{position:absolute;top:0;left:0;display:block;width:100%;height:100%;box-sizing:border-box;pointer-events:none;content:"";background:var(--color-attention-subtle);mix-blend-mode:var(--color-diff-blob-selected-line-highlight-mix-blend-mode)}.gist .selected-line.selected-line-top::after{border-top:1px solid var(--color-attention-muted)}.gist .selected-line.selected-line-bottom::after{border-bottom:1px solid var(--color-attention-muted)}.gist .selected-line:first-child::after,.gist .selected-line.selected-line-left::after{border-left:1px solid var(--color-attention-muted)}.gist .selected-line:last-child::after,.gist .selected-line.selected-line-right::after{border-right:1px solid var(--color-attention-muted)}.gist .is-commenting .selected-line.blob-code::before{position:absolute;top:0;left:-1px;display:block;width:4px;height:100%;content:"";background:var(--color-accent-emphasis)}.gist .add-line-comment{position:relative;z-index:1;float:left;width:22px;height:22px;margin:-2px -10px -2px -32px;line-height:21px;color:var(--color-fg-on-emphasis);text-align:center;text-indent:0;cursor:pointer;background-color:var(--color-accent-emphasis);border-radius:6px;box-shadow:var(--color-shadow-medium);opacity:0;transition:transform .1s ease-in-out;transform:scale(0.8, 0.8)}.gist .add-line-comment:hover{transform:scale(1, 1)}.is-hovered .gist .add-line-comment,.gist .add-line-comment:focus{opacity:1}.gist .add-line-comment .octicon{vertical-align:text-top;pointer-events:none}.gist .add-line-comment.octicon-check{background:#333;opacity:1}.gist .inline-comment-form{border:1px solid #dfe2e5;border-radius:6px}.gist .timeline-inline-comments{width:100%;table-layout:fixed}.gist .timeline-inline-comments .inline-comments,.gist .show-inline-notes .inline-comments{display:table-row}.gist .inline-comments{display:none}.gist .inline-comments .line-comments+.blob-num{border-left-width:1px}.gist .inline-comments .timeline-comment{margin-bottom:10px}.gist .inline-comments .inline-comment-form,.gist .inline-comments .inline-comment-form-container{max-width:780px}.gist .comment-holder{max-width:780px}.gist .comment-holder+.comment-holder{margin-top:16px}.gist .line-comments+.line-comments,.gist .empty-cell+.line-comments{border-left:1px solid var(--color-border-muted)}.gist .inline-comment-form-container .inline-comment-form-box,.gist .inline-comment-form-container.open .inline-comment-form-actions{display:none}.gist .inline-comment-form-container .inline-comment-form-actions,.gist .inline-comment-form-container.open .inline-comment-form-box{display:block}.gist body.full-width .container,.gist body.full-width .container-lg:not(.markdown-body),.gist body.full-width .container-xl{width:100%;max-width:none;padding-right:20px;padding-left:20px}.gist body.full-width .repository-content{width:100%}.gist body.full-width .new-pr-form{max-width:980px}.gist .file-diff-split{table-layout:fixed}.gist .file-diff-split .blob-code+.blob-num{border-left:1px solid var(--color-border-muted)}.gist .file-diff-split .blob-code-inner{white-space:pre-wrap}.gist .file-diff-split .empty-cell{cursor:default;background-color:var(--color-neutral-subtle);border-right-color:var(--color-border-muted)}@media(max-width: 1280px){.gist .file-diff-split .write-selected .comment-form-head.tabnav:not(.CommentBox-header){margin-bottom:80px !important}.gist .file-diff-split .tabnav:not(.CommentBox-header) markdown-toolbar{position:absolute;top:47px;right:0;left:0;height:64px;align-items:center !important}}@media(min-width: 1280px){.gist .file-diff-split .write-selected .comment-form-head.tabnav:not(.CommentBox-header) .tabnav-tabs{align-self:end}}.gist .submodule-diff-stats .octicon-diff-removed{color:var(--color-danger-fg)}.gist .submodule-diff-stats .octicon-diff-renamed{color:var(--color-fg-muted)}.gist .submodule-diff-stats .octicon-diff-modified{color:var(--color-attention-fg)}.gist .submodule-diff-stats .octicon-diff-added{color:var(--color-success-fg)}.gist .BlobToolbar{left:-17px}.gist .BlobToolbar-dropdown{margin-left:-2px}.gist .pl-token:hover,.gist .pl-token.active{cursor:pointer;background:var(--color-attention-muted)}.gist .task-list-item{list-style-type:none}.gist .task-list-item label{font-weight:var(--base-text-weight-normal, 400)}.gist .task-list-item.enabled label{cursor:pointer}.gist .task-list-item+.task-list-item{margin-top:4px}.gist .task-list-item .handle{display:none}.gist .task-list-item-checkbox{margin:0 .2em .25em -1.4em;vertical-align:middle}.gist .contains-task-list:dir(rtl) .task-list-item-checkbox{margin:0 -1.6em .25em .2em}.gist .convert-to-issue-button{top:2px;right:4px;padding:0 2px;margin-right:8px;-webkit-user-select:none;user-select:none;background-color:var(--color-canvas-subtle)}.gist .convert-to-issue-button .octicon{fill:var(--color-fg-default)}.gist .convert-to-issue-button:hover .octicon,.gist .convert-to-issue-button:focus .octicon{fill:var(--color-accent-fg)}.gist .reorderable-task-lists .markdown-body .contains-task-list{padding:0}.gist .reorderable-task-lists .markdown-body li:not(.task-list-item){margin-left:24px}.gist .reorderable-task-lists .markdown-body ol:not(.contains-task-list) li,.gist .reorderable-task-lists .markdown-body ul:not(.contains-task-list) li{margin-left:0}.gist .reorderable-task-lists .markdown-body .task-list-item{padding:2px 15px 2px 42px;margin-right:-15px;margin-left:-15px;line-height:1.5;border:0}.gist .reorderable-task-lists .markdown-body .task-list-item+.task-list-item{margin-top:0}.gist .reorderable-task-lists .markdown-body .task-list-item .handle{display:block;float:left;width:20px;padding:2px 0 0 2px;margin-left:-43px;opacity:0}.gist .reorderable-task-lists .markdown-body .task-list-item .drag-handle{fill:var(--color-fg-default)}.gist .reorderable-task-lists .markdown-body .task-list-item.hovered>.handle{opacity:1}.gist .reorderable-task-lists .markdown-body .task-list-item.is-dragging{opacity:0}.gist .reorderable-task-lists .markdown-body .contains-task-list:dir(rtl) .task-list-item{margin-right:0}.gist .comment-body .reference{font-weight:var(--base-text-weight-semibold, 600);white-space:nowrap}.gist .comment-body .issue-link{white-space:normal}.gist .comment-body .issue-link .issue-shorthand{font-weight:var(--base-text-weight-normal, 400);color:var(--color-fg-muted)}.gist .comment-body .issue-link:hover .issue-shorthand,.gist .comment-body .issue-link:focus .issue-shorthand{color:var(--color-accent-fg)}.gist .review-comment-contents .markdown-body .task-list-item{padding-left:42px;margin-right:-12px;margin-left:-12px;border-top-left-radius:6px;border-bottom-left-radius:6px}.gist .convert-to-issue-enabled .task-list-item .contains-task-list{padding:4px 15px 0 43px;margin:0 -15px 0 -42px}.gist .convert-to-issue-enabled .task-list-item.hovered{background-color:var(--color-canvas-subtle)}.gist .convert-to-issue-enabled .task-list-item.hovered .contains-task-list{background-color:var(--color-canvas-default)}.gist .convert-to-issue-enabled .task-list-item.hovered>.convert-to-issue-button{z-index:20;width:auto;height:auto;overflow:visible;clip:auto}.gist .convert-to-issue-enabled .task-list-item.hovered>.convert-to-issue-button svg{overflow:visible}.gist .convert-to-issue-enabled .task-list-item.is-loading{color:var(--color-fg-muted);background-color:var(--color-accent-subtle);border-top:1px solid var(--color-accent-subtle);border-bottom:1px solid var(--color-canvas-default);border-left:1px solid var(--color-canvas-default)}.gist .convert-to-issue-enabled .task-list-item.is-loading ul{color:var(--color-fg-default);background-color:var(--color-canvas-default)}.gist .convert-to-issue-enabled .task-list-item.is-loading>.handle{opacity:0}.gist .task-list-item-convert-container{position:absolute !important;top:calc(100% - 4px);right:0;left:0;display:none;margin-top:0}.gist .task-list-item-convert-container:hover,.gist .task-list-item-convert-container:focus{display:block}.gist .task-list-item-convert-button-container{top:4px;right:0;left:auto;width:auto}.gist .contains-task-list{position:relative}.gist .contains-task-list:hover .task-list-item-convert-container,.gist .contains-task-list:focus-within .task-list-item-convert-container{display:block;width:auto;height:24px;overflow:visible;clip:auto}.gist .convert-to-block-button{margin:0 4px}.gist .highlight{padding:0;margin:0;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:12px;font-weight:var(--base-text-weight-normal, 400);line-height:1.4;color:#333;background:var(--color-canvas-default);border:0}.gist .render-viewer-error,.gist .render-viewer-fatal,.gist .render-viewer-invalid,.gist .octospinner{display:none}.gist iframe.render-viewer{width:100%;height:480px;overflow:hidden;border:0}.gist pre,.gist code{font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace !important;white-space:pre}.gist .gist-meta{padding:10px;overflow:hidden;font:12px -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";color:var(--color-fg-muted);background-color:#f7f7f7;border-radius:0 0 6px 6px}.gist .gist-meta a{font-weight:var(--base-text-weight-semibold, 600);color:#666;text-decoration:none;border:0}.gist .gist-data{overflow:auto;word-wrap:normal;background-color:var(--color-canvas-default);border-bottom:1px solid #ddd;border-radius:6px 6px 0 0}.gist .gist-file{margin-bottom:1em;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;border:1px solid #ddd;border-bottom:1px solid #ccc;border-radius:6px}.gist .gist-file article{padding:6px}.gist .gist-file .scroll .gist-data{position:absolute;top:0;right:0;bottom:30px;left:0;overflow:scroll}.gist .gist-file .scroll .gist-meta{position:absolute;right:0;bottom:0;left:0}.gist .blob-num{min-width:inherit;padding:1px 10px !important;background:rgba(0,0,0,0)}.gist .blob-code{padding:1px 10px !important;text-align:left;background:rgba(0,0,0,0);border:0}.gist .blob-code-inner::selection,.gist .blob-code-inner *::selection{background-color:#c8e1ff}.gist .blob-wrapper table{border-collapse:collapse}.gist .blob-wrapper tr:first-child td{padding-top:4px}.gist .markdown-body .anchor{display:none}

/*# sourceMappingURL=gist-embed-b268eee9dbe8.css.map*/</style>