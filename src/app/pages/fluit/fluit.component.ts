import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as CodeMirror from "../../../assets/codemirror/codemirror.min.js";
@Component({
  selector: 'app-fluit',
  templateUrl: './fluit.component.html',
  styleUrls: ['./fluit.component.scss']
})
export class FluitComponent implements OnInit, AfterViewInit {
  
  @ViewChild('myedit') mirror?: ElementRef;
  @ViewChild('myeditdepen') mirrorDepen?: ElementRef;
  @ViewChild('myeditscript') mirrorScript?: ElementRef;
  public paneldes: any = `<div class='flc-prefsEditor-separatedPanel fl-prefsEditor-separatedPanel'>
  <!-- This is the div that will contain the Preference Editor component -->
  <div class='flc-slidingPanel-panel flc-prefsEditor-iframe'></div>
  <!-- This div is for the sliding panel that shows and hides the Preference Editor controls -->
  <div class='fl-panelBar'>
      <span class='fl-prefsEditor-buttons'>
          <button id='reset' class='flc-prefsEditor-reset fl-prefsEditor-reset'><span class='fl-icon-undo'></span>
              Reset</button>
          <button id='show-hide' class='flc-slidingPanel-toggleButton fl-prefsEditor-showHide'> Show/Hide</button>
      </span>
  </div>
</div>`;

  public dependences = `
<!-- Required CSS files -->
<link rel="stylesheet" type="text/css" href="lib/infusion/framework/fss/css/fss-layout.css" />
<link rel="stylesheet" type="text/css" href="lib/infusion/framework/fss/css/fss-text.css" />
<link rel="stylesheet" type="text/css" href="lib/infusion/framework/preferences/css/fss/fss-theme-bw-prefsEditor.css" />
<link rel="stylesheet" type="text/css" href="lib/infusion/framework/preferences/css/fss/fss-theme-wb-prefsEditor.css" />
<link rel="stylesheet" type="text/css" href="lib/infusion/framework/preferences/css/fss/fss-theme-by-prefsEditor.css" />
<link rel="stylesheet" type="text/css" href="lib/infusion/framework/preferences/css/fss/fss-theme-yb-prefsEditor.css" />
<link rel="stylesheet" type="text/css" href="lib/infusion/framework/preferences/css/fss/fss-theme-lgdg-prefsEditor.css" />
<link rel="stylesheet" type="text/css" href="lib/infusion/framework/preferences/css/fss/fss-theme-dglg-prefsEditor.css" />
<link rel="stylesheet" type="text/css" href="lib/infusion/framework/preferences/css/fss/fss-text-prefsEditor.css" />
<link rel="stylesheet" type="text/css" href="lib/infusion/lib/jquery/ui/css/fl-theme-by/by.css" />
<link rel="stylesheet" type="text/css" href="lib/infusion/lib/jquery/ui/css/fl-theme-yb/yb.css" />
<link rel="stylesheet" type="text/css" href="lib/infusion/lib/jquery/ui/css/fl-theme-bw/bw.css" />
<link rel="stylesheet" type="text/css" href="lib/infusion/lib/jquery/ui/css/fl-theme-wb/wb.css" />
<link rel="stylesheet" type="text/css" href="lib/infusion/lib/jquery/ui/css/fl-theme-lgdg/lgdg.css" />
<link rel="stylesheet" type="text/css" href="lib/infusion/lib/jquery/ui/css/fl-theme-dglg/dglg.css" />
<link rel="stylesheet" type="text/css" href="lib/infusion/framework/preferences/css/PrefsEditor.css" />
<link rel="stylesheet" type="text/css" href="lib/infusion/framework/preferences/css/SeparatedPanelPrefsEditor.css" />
<!-- The Infusion Library -->
<script type="text/javascript" src="lib/infusion/infusion-custom.js"></script>`

public script=`
<body>
    <script type="text/javascript">
    $(document).ready(function () {
        fluid.uiOptions.prefsEditor(".flc-prefsEditor-separatedPanel", {
            tocTemplate: "lib/infusion/components/tableOfContents/html/TableOfContents.html",
            templatePrefix: "lib/infusion/framework/preferences/html/",
            messagePrefix: "lib/infusion/framework/preferences/messages/"
        });
    })
    </script>
 
    <div class="flc-prefsEditor-separatedPanel fl-prefsEditor-separatedPanel">
        ...
    </div>
 
    <!-- the rest of your page here -->
</body>
`;

ngAfterViewInit(): void {
  CodeMirror(this.mirror?.nativeElement, {
    lineNumbers: true,
    tabSize: 2,
    value: this.paneldes,
  });


  CodeMirror(this.mirrorDepen?.nativeElement, {
    lineNumbers: true,
    tabSize: 2,
    value: this.dependences,
  });

  CodeMirror(this.mirrorScript?.nativeElement, {
    lineNumbers: true,
    tabSize: 2,
    value: this.script,
  });
}


  ngOnInit(): void {
  }
}

