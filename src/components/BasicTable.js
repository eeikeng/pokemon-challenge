import React from 'react';
import { useEffect } from 'react';
import MaterialTable from "material-table";
import { columns } from './Columns';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
 } from '@mui/material';


export const BasicTable = (pokemon) => { 
    
    useEffect(() => {
        const lastColConfig = localStorage.getItem('current-colID');
        const lastDirConfig = localStorage.getItem('current-dir');

        if(lastColConfig && lastDirConfig){
            columns[lastColConfig].defaultSort = lastDirConfig
        }
        else{
            console.log('No previous configuration found');
        } 
      },)


    function setStorage(colID, dir){
        localStorage.setItem('current-colID', colID)
        localStorage.setItem('current-dir', dir)
    }
    
    return (
        <div data-testid="basic-table">
        <MaterialTable
            title="Pokedex"
            onOrderChange={(colID, dir) => setStorage(colID, dir)}
            columns={columns}
            data={pokemon.data}
            options={{
                sorting: true,
                search: false,
                paging: false,
                columnsButton:true,
              }}
              detailPanel={
                  rowData => {
                return (
                    <div className='StatColumns'>
                        <Table>
                    <TableHead>
                         <TableRow>
                             <TableCell>HP</TableCell>
                             <TableCell>Attack</TableCell>
                             <TableCell>Defence</TableCell>
                             <TableCell>Special Attack</TableCell>
                             <TableCell>Special Defence</TableCell>
                             <TableCell>Speed</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {rowData.stats.map((stats, i) => {
                                return(
                                <TableCell key={i}>{stats.base_stat}</TableCell>)})}            
                        </TableRow>    
                    </TableBody>
                </Table>
                    </div>
                )
              }}
              />
    </div>
    );
};

