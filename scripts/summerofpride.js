

$(function(){

        var ds = new Miso.Dataset({
          importer : Miso.Dataset.Importers.GoogleSpreadsheet,
          parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
          key : "0AmiwpEaQwxurdGlpbkJTSy1qZ2dYMF9YOGNmX3RkYVE",
          worksheet : "1"
        });

        ds.fetch({
          success : function() {
            this.each(function(row, k) {
                for(var i in row) if(row[i] == null) row[i] = '';

                switch(k){
                    case 0: $('.grupales-fecha').html(row.semana_fecha); break;
                    case 1: $('.grupal-semana-lunes').html(row.semana_fecha); break;
                    case 2: $('.grupal-semana-martes').html(row.semana_fecha); break;
                    case 3: $('.grupal-semana-miercoles').html(row.semana_fecha); break;
                    case 4: $('.grupal-semana-jueves').html(row.semana_fecha); break;
                    case 5: $('.grupal-semana-viernes').html(row.semana_fecha); break;
                    case 6: $('.grupal-semana-sabado').html(row.semana_fecha); break;
                }

                var tr = '<tr>';

                row.saturday_streamer = nl2br(row.saturday_streamer);
                row.sunday_streamer = nl2br(row.sunday_streamer);
                row.monday_streamer = nl2br(row.monday_streamer);
                row.tuesday_streamer = nl2br(row.tuesday_streamer);
                row.wednesday_streamer = nl2br(row.wednesday_streamer);
                row.thursday_streamer = nl2br(row.thursday_streamer);
                row.friday_streamer = nl2br(row.friday_streamer);

                row.saturday_game = nl2br(row.saturday_game);
                row.sunday_game = nl2br(row.sunday_game);
                row.monday_game = nl2br(row.monday_game);
                row.tuesday_game = nl2br(row.tuesday_game);
                row.wednesday_game = nl2br(row.wednesday_game);
                row.thursday_game = nl2br(row.thursday_game);
                row.friday_game = nl2br(row.friday_game);

                  tr = tr+'<td nowrap="nowrap"><span class="horario">'+row.time-day+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.saturday_streamer+'</span><span class="instructor">'+row.saturday_game+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.sunday_streamer+'</span><span class="instructor">'+row.sunday_game+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.monday_streamer+'</span><span class="instructor">'+row.monday_game+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.tuesday_streamer+'</span><span class="instructor">'+row.tuesday_game+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.wednesday_streamer+'</span><span class="instructor">'+row.wednesday_game+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.thursday_streamer+'</span><span class="instructor">'+row.thursday_game+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.friday_streamer+'</span><span class="instructor">'+row.friday_game+'</span></td>';

                  $('#horario tbody').append(tr);
            });
          },
          error : function() {
            console.log("Are you sure you are connected to the internet?");
          }
        });

    $(function(){
         $('#showall').click(function(){
               $('.targetDiv').show();
        });
        $('.showSingle').click(function(){
              $('.targetDiv').fadeOut("fast");;
              $('#div'+$(this).attr('target')).fadeIn("fast");
        });
    $('.targetDiv').fadeOut("fast");;
$('#div1').fadeIn("fast");


});




});