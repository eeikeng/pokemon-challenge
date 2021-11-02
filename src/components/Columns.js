export let columns=[

    {title: "ID", field: "id", align: "left", type: "numeric"},
    {title: "Name", field: "name", align: "left", sorting: false},
    {title: "Picture", field: "sprites.front_default", align: "left", sorting: false, render: rowData => (
    <img src={rowData.sprites.front_default} alt=''/>)},
    {title: "Height", field: "height", align: "left", type: "numeric"},
    {title: "Weight", field: "weight", align: "left", type: "numeric"},
    {title: "Primary Types", field: "types[0].type.name", align: "left", sorting: false},
    {title: "Secondary Types", field: "types[1].type.name", align: "left", emptyValue:()=><em>---</em>, sorting: false}
  ]

  export const statcolumns=[
    
  {title: "HP", field: "base_stat", align:"left", type: "numeric"},
  {title: "Attack", field: "base_stat", align:"left", type: "numeric"},
  {title: "Defence", field: "base_stat", align:"left", type: "numeric"},
  {title: "Special Attack", field: "base_stat", align:"left", type: "numeric"},
  {title: "Special Defence", field: "base_stat", align:"left", type: "numeric"},
  {title: "Speed", field: "base_stat", align:"left", type: "numeric"}
  
]