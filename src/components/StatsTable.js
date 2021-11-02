import React from 'react';
import MaterialTable from "material-table";
import { statcolumns } from './Columns';

  export const StatsTable = (pokemon) => { 

    if(!pokemon){
        <p>Loading...</p>
    }

    if(pokemon){

     
    return (
      <div>
        <MaterialTable
        title="Detailed Stats"
        columns={statcolumns}
        data={pokemon.data[0].stats}
        options={{
          search: false,
          paging: false,
        }}
        />
      </div>
    );
        }};