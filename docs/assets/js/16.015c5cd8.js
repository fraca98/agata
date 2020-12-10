(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{376:function(t,e,n){"use strict";n.r(e);var a=n(42),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"inspection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inspection"}},[t._v("#")]),t._v(" Inspection")]),t._v(" "),n("h2",{attrs:{id:"findnanislands"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#findnanislands"}},[t._v("#")]),t._v(" findNanIslands")]),t._v(" "),n("div",{staticClass:"language-MATLAB extra-class"},[n("pre",{pre:!0,attrs:{class:"language-matlab"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("shortNan"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" longNan"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nanStart"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nanEnd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findNanIslands")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("TH"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("Function that locates nan sequences in vector "),n("code",[t._v("data")]),t._v(", and classifies them based on their length (longer or not than the specified threshold "),n("code",[t._v("TH")]),t._v(").")]),t._v(" "),n("h3",{attrs:{id:"inputs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("data: vector of double (required)")]),t._v(" "),n("br"),t._v("\nA vector of double of equally spaced (in time) values;")]),t._v(" "),n("li",[n("strong",[t._v("TH: integer (required)")]),t._v("\nA integer defining the threshold, expressed in number of samples, to distinguish between long and short nan sequences.")])]),t._v(" "),n("h3",{attrs:{id:"outputs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("shortNan: vector of integer")]),t._v(" "),n("br"),t._v('\nVector of integer that contains the indices of "short nan" sequences (i.e., sequences shorter than '),n("code",[t._v("TH")]),t._v(" consecutive nan samples);")]),t._v(" "),n("li",[n("strong",[t._v("longNan: vector of integer")]),t._v(" "),n("br"),t._v('\nVector of integer that contains the indices of "long nan" sequences (i.e., sequences having '),n("code",[t._v("TH")]),t._v(" consecutive nan samples or more);")]),t._v(" "),n("li",[n("strong",[t._v("nanStart: vector of integer")]),t._v(" "),n("br"),t._v("\nVector of integer containing the start indices of the nan sequences;")]),t._v(" "),n("li",[n("strong",[t._v("nanEnd: vector of integer")]),t._v(" "),n("br"),t._v("\nVector of integer containing the last indices of the nan sequences.")])]),t._v(" "),n("h3",{attrs:{id:"preconditions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#preconditions"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("data")]),t._v(" must be a timetable having an homogeneous time grid;")]),t._v(" "),n("li",[n("code",[t._v("TH")]),t._v(" must be an integer.")])]),t._v(" "),n("h3",{attrs:{id:"reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),n("ul",[n("li",[t._v("None")])]),t._v(" "),n("h2",{attrs:{id:"findhypoglycemicevents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#findhypoglycemicevents"}},[t._v("#")]),t._v(" findHypoglycemicEvents")]),t._v(" "),n("div",{staticClass:"language-MATLAB extra-class"},[n("pre",{pre:!0,attrs:{class:"language-matlab"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" hypoglycemicEvents "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findHypoglycemicEvents")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("Function that finds the hypoglycemic events in a\ngiven glucose trace. The definition of hypoglycemic event can be found in Danne et al.")]),t._v(" "),n("h3",{attrs:{id:"input"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[t._v("#")]),t._v(" Input")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("data: timetable (required)")]),t._v(" "),n("br"),t._v("\nA timetable with columns "),n("code",[t._v("Time")]),t._v(" and "),n("code",[t._v("glucose")]),t._v(" containing the glucose data to analyze (mg/dl).")])]),t._v(" "),n("h3",{attrs:{id:"output"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" Output")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("hypoglycemicEvents: structure")]),t._v(" "),n("br"),t._v("\nA structure containing the information on the hypoglycemic events found by the function with fields:\n"),n("ul",[n("li",[n("strong",[t._v("time: vector of datetime")]),t._v(" "),n("br"),t._v("\nA vector of datetime containing the starting timestamps of each found hypoglycemic event;")]),t._v(" "),n("li",[n("strong",[t._v("duration: vector of integer")]),t._v(" "),n("br"),t._v("\nA vector of integer containing the duration (min) of each found hypoglycemic event.")])])])]),t._v(" "),n("h3",{attrs:{id:"preconditions-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-2"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("data")]),t._v(" must be a timetable having an homogeneous time grid.")])]),t._v(" "),n("h3",{attrs:{id:"reference-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference-2"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),n("ul",[n("li",[t._v('Danne et al., "International consensus on use of continuous glucose monitoring", Diabetes Care, 2017, vol. 40, pp. 1631-1640. DOI: '),n("a",{attrs:{href:"https://doi.org/10.2337/dc17-1600",target:"_blank",rel:"noopener noreferrer"}},[t._v("10.2337/dc17-1600"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),n("h2",{attrs:{id:"findhyperglycemicevents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#findhyperglycemicevents"}},[t._v("#")]),t._v(" findHyperglycemicEvents")]),t._v(" "),n("div",{staticClass:"language-MATLAB extra-class"},[n("pre",{pre:!0,attrs:{class:"language-matlab"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" hyperglycemicEvents "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findHyperglycemicEvents")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("Function that finds the hyperglycemic events in a\ngiven glucose trace. The definition of hyperglycemic event can be found in Danne et al.")]),t._v(" "),n("h3",{attrs:{id:"input-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-2"}},[t._v("#")]),t._v(" Input")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("data: timetable (required)")]),t._v(" "),n("br"),t._v("\nA timetable with columns "),n("code",[t._v("Time")]),t._v(" and "),n("code",[t._v("glucose")]),t._v(" containing the glucose data to analyze (mg/dl).")])]),t._v(" "),n("h3",{attrs:{id:"output-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-2"}},[t._v("#")]),t._v(" Output")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("hyperglycemicEvents: structure")]),t._v(" "),n("br"),t._v("\nA structure containing the information on the hyperglycemic events found by the function with fields:\n"),n("ul",[n("li",[n("strong",[t._v("time: vector of datetime")]),t._v(" "),n("br"),t._v("\nA vector of datetime containing the starting timestamps of each found hyperglycemic event;")]),t._v(" "),n("li",[n("strong",[t._v("duration: vector of integer")]),t._v(" "),n("br"),t._v("\nA vector of integer containing the duration (min) of each found hyperglycemic event.")])])])]),t._v(" "),n("h3",{attrs:{id:"preconditions-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-3"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("data")]),t._v(" must be a timetable having an homogeneous time grid.")])]),t._v(" "),n("h3",{attrs:{id:"reference-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference-3"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),n("ul",[n("li",[t._v('Danne et al., "International consensus on use of continuous glucose monitoring", Diabetes Care, 2017, vol. 40, pp. 1631-1640. DOI: '),n("a",{attrs:{href:"https://doi.org/10.2337/dc17-1600",target:"_blank",rel:"noopener noreferrer"}},[t._v("10.2337/dc17-1600"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),n("h2",{attrs:{id:"findprolongedhypoglycemicevents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#findprolongedhypoglycemicevents"}},[t._v("#")]),t._v(" findProlongedHypoglycemicEvents")]),t._v(" "),n("div",{staticClass:"language-MATLAB extra-class"},[n("pre",{pre:!0,attrs:{class:"language-matlab"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" prolongedHypoglycemicEvents "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findProlongedHypoglycemicEvents")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("Function that finds the prolonged hypoglycemic events in a\ngiven glucose trace. The definition of prolonged hypoglycemic event can be found in Danne et al.")]),t._v(" "),n("h3",{attrs:{id:"input-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-3"}},[t._v("#")]),t._v(" Input")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("data: timetable (required)")]),t._v(" "),n("br"),t._v("\nA timetable with columns "),n("code",[t._v("Time")]),t._v(" and "),n("code",[t._v("glucose")]),t._v(" containing the glucose data to analyze (mg/dl).")])]),t._v(" "),n("h3",{attrs:{id:"output-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-3"}},[t._v("#")]),t._v(" Output")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("prolongedHypoglycemicEvents: structure")]),t._v(" "),n("br"),t._v("\nA structure containing the information on the prolonged hypoglycemic events found by the function with fields:\n"),n("ul",[n("li",[n("strong",[t._v("time: vector of datetime")]),t._v(" "),n("br"),t._v("\nA vector of datetime containing the starting timestamps of each found prolonged hypoglycemic event;")]),t._v(" "),n("li",[n("strong",[t._v("duration: vector of integer")]),t._v(" "),n("br"),t._v("\nA vector of integer containing the duration (min) of each found prolonged hypoglycemic event.")])])])]),t._v(" "),n("h3",{attrs:{id:"preconditions-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-4"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("data")]),t._v(" must be a timetable having an homogeneous time grid.")])]),t._v(" "),n("h3",{attrs:{id:"reference-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference-4"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),n("ul",[n("li",[t._v('Danne et al., "International consensus on use of continuous glucose monitoring", Diabetes Care, 2017, vol. 40, pp. 1631-1640. DOI: '),n("a",{attrs:{href:"https://doi.org/10.2337/dc17-1600",target:"_blank",rel:"noopener noreferrer"}},[t._v("10.2337/dc17-1600"),n("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);e.default=s.exports}}]);