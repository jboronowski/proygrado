$(document).ready(function() {
  $('#dttb').dataTable({
dom:"<'row'<'col-sm-12 col-md-8'l><'col-sm-12 col-md-1'f>>" +
"<'row'<'col-sm-12'tr>>" +
"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>"+
"<'row'<'col-sm-4'><'col-sm-4'B><'col-sm-4'>>"
    

,
buttons: [

],

     "language": {
    "sProcessing":     "Procesando...",
    "sLengthMenu":     "Mostrar _MENU_ registros",
    "sZeroRecords":    "No se encontraron resultados",
    "sEmptyTable":     "Ningún dato disponible en esta tabla",
    "sInfo":           "Registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix":    "",
    "sSearch":         "Buscar:",
    "sUrl":            "",
    "sInfoThousands":  ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
        "sFirst":    "Primero",
        "sLast":     "Último",
        "sNext":     "Siguiente",
        "sPrevious": "Anterior"
    },
    "oAria": {
        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    },
    "buttons": {
        "copy": "Copiar",
        "csv": "Exportar Excel",
         "print": "Imprimir/PDF",
        "colvis": "Visibilidad"
    }
}

  });
});


$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('#dttb1 thead tr').clone(true).appendTo( '#dttb1  thead' );
    $('#dttb1 thead tr:eq(1) th').each( function (i) {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Buscar '+title+'" />' );
 
        $( 'input', this ).on( 'keyup change', function () {
            if ( table.column(i).search() !== this.value ) {
                table
                    .column(i)
                    .search( this.value )
                    .draw();
            }
        } );
    } );
 
    var table = $('#dttb1').DataTable( {
        orderCellsTop: true,
        fixedHeader: true,
        autoFill: true,
        dom: 'Bfrtip',
        buttons: [
            {extend:'copyHtml5',
            className: 'btn btn-outline-dark'},
            {extend:'excelHtml5',
            className: 'btn btn-outline-success'},
            {extend:'csvHtml5',
            className: 'btn btn-outline-info'},
            {extend: 'pdfHtml5',
              className: 'btn btn-outline-danger',
                orientation: 'landscape',
                pageSize: 'LEGAL'   },
           {extend:'colvis',
        text: 'Agregar/Sacar Columna',
            className: 'btn btn-outline-light'}
        ]
    } );



} );