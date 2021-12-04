var $3D0D8$reactjsxruntime = require("react/jsx-runtime");
require("react");
var $3D0D8$reactdom = require("react-dom");
var $3D0D8$reactasynchook = require("react-async-hook");
var $3D0D8$datefnsaddDays = require("date-fns/addDays");
var $3D0D8$datefnsformat = require("date-fns/format");
var $3D0D8$formatnumber = require("format-number");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}












const $252bc1eb64fe5517$var$YesNo = new Map([
    [
        true,
        'YES 😱'
    ],
    [
        false,
        'nope'
    ], 
]);
function $252bc1eb64fe5517$export$2e2bcd8739ae039({ yes: yes  }) {
    return(/*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("span", {
        className: "hazard",
        children: $252bc1eb64fe5517$var$YesNo.get(yes)
    }));
}






const $87c1ab115aafce9a$var$formatter = ($parcel$interopDefault($3D0D8$formatnumber))();
function $87c1ab115aafce9a$export$2e2bcd8739ae039({ data: data  }) {
    return data.map((_, i)=>/*#__PURE__*/ $3D0D8$reactjsxruntime.jsxs("p", {
            children: [
                "Misses ",
                _.orbiting_body,
                " tomorrow at",
                ' ',
                ($parcel$interopDefault($3D0D8$datefnsformat))(_.epoch_date_close_approach, 'h:mmaaaa'),
                " by",
                ' ',
                $87c1ab115aafce9a$var$formatter(parseInt(_.miss_distance.miles, 10)),
                " miles whilst travelling at ",
                ($parcel$interopDefault($3D0D8$formatnumber))({
                    truncate: 0
                })(_.relative_velocity.miles_per_hour),
                "mph"
            ]
        }, i)
    );
}


function $2b94fa4b50afb50b$export$2e2bcd8739ae039({ name: name , is_potentially_hazardous_asteroid: is_potentially_hazardous_asteroid , close_approach_data: close_approach_data , nasa_jpl_url: nasa_jpl_url ,  }) {
    return(/*#__PURE__*/ $3D0D8$reactjsxruntime.jsxs("div", {
        className: is_potentially_hazardous_asteroid ? 'is-hazard' : 'no-hazard',
        children: [
            /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("h2", {
                children: name.replace(/[()]/g, '')
            }),
            /*#__PURE__*/ $3D0D8$reactjsxruntime.jsxs("p", {
                children: [
                    "Potentially hazardous?",
                    ' ',
                    /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx($252bc1eb64fe5517$export$2e2bcd8739ae039, {
                        yes: is_potentially_hazardous_asteroid
                    })
                ]
            }),
            /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx($87c1ab115aafce9a$export$2e2bcd8739ae039, {
                data: close_approach_data
            }),
            /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("p", {
                className: "more",
                children: /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("a", {
                    href: nasa_jpl_url,
                    target: "_blank",
                    children: "Find out more"
                })
            })
        ]
    }));
}


function $0ef7f2e87d14821e$var$getDate(d = new Date()) {
    return d.toJSON().split('T')[0];
}
const $0ef7f2e87d14821e$var$fetchData = ()=>fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${$0ef7f2e87d14821e$var$getDate()}&api_key=DEMO_KEY`).then((res)=>res.json()
    )
;
function $0ef7f2e87d14821e$export$2e2bcd8739ae039() {
    const data1 = $3D0D8$reactasynchook.useAsync($0ef7f2e87d14821e$var$fetchData, []);
    if (data1.loading) {
        document.title = 'Counting potential earth HAZARDS…';
        return(/*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("p", {
            children: "Getting data from NASA right now to check whether something from space is going to hit us. One moment…"
        }));
    }
    const day = $0ef7f2e87d14821e$var$getDate(($parcel$interopDefault($3D0D8$datefnsaddDays))(new Date(), 1));
    const hazards = data1.result.near_earth_objects[day].reduce((acc, curr)=>{
        if (curr.is_potentially_hazardous_asteroid) return acc + 1;
        return acc;
    }, 0);
    document.title = `${hazards} potential HAZARDS ${hazards > 0 ? '😱' : '👍'}`;
    const results = data1.result.near_earth_objects[day];
    return(/*#__PURE__*/ $3D0D8$reactjsxruntime.jsxs("div", {
        children: [
            /*#__PURE__*/ $3D0D8$reactjsxruntime.jsxs("p", {
                children: [
                    ($parcel$interopDefault($3D0D8$datefnsformat))(($parcel$interopDefault($3D0D8$datefnsaddDays))(new Date(), 1), 'EEEE d-MMM'),
                    " there will be",
                    ' ',
                    /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("strong", {
                        children: results.length
                    }),
                    " near misses"
                ]
            }),
            /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("hr", {
            }),
            results.sort((a)=>a.is_potentially_hazardous_asteroid ? -1 : 1
            ).map((data)=>/*#__PURE__*/ $3D0D8$reactjsxruntime.jsx($2b94fa4b50afb50b$export$2e2bcd8739ae039, {
                    ...data
                }, data.id)
            )
        ]
    }));
}


$3D0D8$reactdom.render(/*#__PURE__*/ $3D0D8$reactjsxruntime.jsx($0ef7f2e87d14821e$export$2e2bcd8739ae039, {
}), document.getElementById('app'));
if (null) null.accept(function() {
    window.location.reload();
});


//# sourceMappingURL=index.js.map
