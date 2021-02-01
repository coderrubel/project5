$(function(){

	calc();
	$('#calc_plan').on('change', calc);
	$('#inv_amount').bind('change keyup', calc).on('keypress', isNumberKey);
});

function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode > 31 && (charCode < 45 || charCode > 57))
		return false;
	return true;
}

function calc() {

	var plan = $('#calc_plan').val();
	var amount = $('#inv_amount').val();
	var percent;
	var days;
	var hours;

	switch (plan) {
		case '1':
			switch (true) {
				case (amount<20):
					percent = 0;
					days=1;
					hours=24;
					break;

				case (amount<=2000): 
					percent = 101.50; 
					days=1;
					hours=24;
					break;

				case (amount<=10000): 
					percent = 112; 
					days=1;
					hours=24;
					break;
				
                case (amount<=200000): 
					percent = 130; 
					days=1;
					hours=24;
					break;	

			   default:
					percent = 0; 
					days=1;
					hours=24;
			}
			break;

		case '2':
			switch (true) {
				case (amount<20):
					percent = 0;
					days=5;
					hours=72;
					break;

				case (amount<=2000): 
					percent = 109; 
					days=5;
					hours=72;
					break;

				case (amount<=10000): 
					percent = 180; 
					days=5;
					hours=72;
					break;
				
                case (amount<=200000): 
					percent = 290; 
					days=5;
					hours=72;
					break;	

			   default:
					percent = 0; 
					days=5;
					hours=72;
			}
			break;


            case '3':
    			switch (true) {
    				case (amount<20):
    					percent = 0;
    					days=15;
    					hours=168;
    					break;
    
    				case (amount<=2000): 
    					percent = 132; 
    					days=15;
    					hours=168;
    					break;
    
    				case (amount<=10000): 
    					percent = 450; 
    					days=15;
    					hours=168;
    					break;
    				
                    case (amount<=200000): 
    					percent = 800; 
    					days=15;
    					hours=168;
    					break;	
    
    			   default:
    					percent = 0; 
    					days=15;
    					hours=168;
    			}
    			break;


		case '4':
			switch (true) {
				case (amount<500):
					percent = 0;
					days=30;
					hours=360;
					break;

				case (amount<=2000): 
					percent = 300; 
					days=30;
					hours=360;
					break;

				case (amount<=10000): 
					percent = 1100; 
					days=30;
					hours=360;
					break;
				
                case (amount<=200000): 
					percent = 1800; 
					days=30;
					hours=360;
					break;	

			   default:
					percent = 0; 
					days=30;
					hours=360;
			}
			break;

		case '5':
			switch (true) {
				case (amount<5000):
					percent = 0;
					days=6;
					hours=720;
					break;

				case (amount<=50000): 
					percent = 555; 
					days=6;
					hours=720;
					break;
				
			   default:
					percent = 0; 
					days=6;
					hours=720;
			}
			break;

		case '6':
			switch (true) {
				case (amount<10000):
					percent = 0;
					days=12;
					hours=1440;
					break;

				case (amount<=100000): 
					percent = 1200; 
					days=12;
					hours=1440;
					break;
				
			   default:
					percent = 0; 
					days=12;
					hours=1440;
			}
			break;
	}
	

$('#assign_per').text(percent+'%');
	var total = amount*percent/100;
	var hourbase= total*24;
	$('#total_return').text('$'+total.toFixed(2));
	
	//for hourly
	/*
	if(days==1)
	    {   
	        $('#total_return').text('$'+(hourbase).toFixed(2));
	    }
	    else{
	        $('#total_return').text('$'+total.toFixed(2));
	    }
	  */
    $('#total_days').text(days);
	$('#total_invam').text('$'+(amount*1).toFixed(2));
	
	
	if(total <= 0){
		$('#net_profit').text('0.00');
	}else{
	    $('#net_profit').text('$'+(total-amount).toFixed(2));
	    
	    //for hourly
	    /*
	    if(days== 1)
	    {   
	        $('#net_profit').text('$'+(hourbase-amount).toFixed(2));
	    }
	    else{
	        $('#net_profit').text('$'+(total-amount).toFixed(2));
	    }
	    */
		
	}
}