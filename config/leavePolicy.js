const leavePolicy = {
    leaveTypes: {
      
        VACATION: {
        accrual: {
          
          // MONTHLY | DAILY | UPFRONT
          method: "MONTHLY",         
          
          // days per month (20 days per year)
          rate: 1.67,                
        },
        carryover: {

          // max days carried over
          max: 10,                   
          
          // carried-over days expire end of Q1
          expiry: "2025-03-31",      
        },
        negativeBalanceAllowed: false,
        payout: {
          eligible: true,

          // allowed payout events
          triggers: ["TERMINATION", "ANNUAL", "ABOVE_CAP"], 
        },
        requiresApproval: true,
      },
  
      
      SICK: {
        accrual: {
          
          // full allocation at start of year
          method: "UPFRONT",
          rate: 5,                   
        },
        carryover: {

          // no carryover
          max: 0,                    
          expiry: null,
        },

        // can go negative (unpaid after that)
        negativeBalanceAllowed: true, 
        payout: {

          // sick leave is never paid out
          eligible: false,           
          triggers: [],
        },

        // auto-approve (just notify manager)
        requiresApproval: false,     
      },
  
      
      UNPAID: {

        // no accrual
        accrual: {
          method: "NONE",            
          rate: 0,
        },
        carryover: {
          max: 0,
          expiry: null,
        },
        negativeBalanceAllowed: false,
        payout: {
          eligible: false,
          triggers: [],
        },
        requiresApproval: true,
      },
    },
  
    workCalendar: {
      weekdaysOnly: true,             
      holidaysByLocation: {
        "AR": ["2025-01-01", "2025-05-01", "2025-12-25"], // Argentina
        "US": ["2025-07-04", "2025-12-25"],             
      },
      allowHalfDays: true,
    },
  
    accrualRules: {
      // if hired mid-year, accrual starts then
      proRateOnHire: true,   

      // adjust accrual for part-time employees
      proRateOnFTE: true,
      
      // if FTE changes mid-year, re-prorate
      allowMidPeriodChange: true,      
    },
  
    payoutRules: {
      
      // salary ÷ 12 ÷ 21.75
      dailyRateMethod: "ANNUAL/21.75", 
    },
  
    // each employee stores their own TimeZone
    timezone: "perEmployee",          
  };

module.exports = {leavePolicy};