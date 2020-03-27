


            AmCharts.makeChart("chartdiv",
                {
                    "type": "serial",
                    "categoryField": "date",
                    "dataDateFormat": "DD-MM",
                    "autoMarginOffset": 40,
                    "marginRight": 60,
                    "marginTop": 60,
                    "colors": [
                        "#373a47",
                        "#fdd400",
                        "#84b761",
                        "#cc4748",
                        "#cd82ad",
                        "#2f4074",
                        "#448e4d",
                        "#b7b83f",
                        "#b9783f",
                        "#b93e3d",
                        "#913167"
                    ],
                    "fontSize": 13,
                    "theme": "light",
                    "categoryAxis": {
                        "parseDates": true
                    },
                    "chartCursor": {
                        "enabled": true
                    },
                    "chartScrollbar": {
                        "enabled": true
                    },
                    "trendLines": [],
                    "graphs": [
                        {
                            "columnWidth": 0.44,
                            "cornerRadiusTop": 8,
                            "dashLength": 4,
                            "fillAlphas": 0.51,
                            "id": "AmGraph-1",
                            "lineAlpha": 0.44,
                            "title": "graph 1",
                            "type": "column",
                            "valueField": "column-1"
                        },
                        {
                            "bullet": "square",
                            "bulletBorderAlpha": 1,
                            "bulletBorderThickness": 1,
                            "bulletSize": 16,
                            "id": "AmGraph-2",
                            "lineThickness": 3,
                            "title": "graph 2",
                            "valueField": "column-2"
                        }
                    ],
                    "guides": [],
                    "valueAxes": [
                        {
                            "id": "ValueAxis-1",
                            "title": ""
                        }
                    ],
                    "allLabels": [],
                    "balloon": {},
                    "titles": [],
                    "dataProvider": [
                        {
                            "date": "12.03",
                            "column-1": "1",
                            "column-2": "0"
                        },
                        {
                            "date": "14.03",
                            "column-1": "5",
                            "column-2": "0"
                        },
                        {
                            "date": "16.03",
                            "column-1": "15",
                            "column-2": "0"
                        },
                        {
                            "date": "18.03",
                            "column-1": "32",
                            "column-2": "0"
                        },
                        {
                            "date": "24.03",
                            "column-1": "71",
                            "column-2": 1
                        },
                        {
                            "date": "26.03",
                            "column-1": "79",
                            "column-2": "1"
                        },
                        {
                            "date": "27.03",
                            "column-1": "86",
                            "column-2": "1"
                        }
                    ]
                }
            );


            AmCharts.makeChart("chartdiv2",
                {
                    "type": "pie",
                    "angle": 12,
                    "balloonText": "[[Gjinia]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                    "depth3D": 15,
                    "innerRadius": "40%",
                    "titleField": "category",
                    "valueField": "column-1",
                    "allLabels": [],
                    "balloon": {},
                    "legend": {
                        "enabled": true,
                        "align": "center",
                        "markerType": "circle"
                    },
                    "titles": [],
                    "dataProvider": [
                        {
                            "category": "Femra",
                            "column-1": "43.7"
                        },
                        {
                            "category": "Meshkuj",
                            "column-1": "45.1"
                        },
                        {
                            "category": "unknow",
                            "column-1": "11.3"
                        }
                    ]
                }
            );