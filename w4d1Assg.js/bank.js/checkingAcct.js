"use strict";
class  CheckingAccount extends Account{
    constructor(number,overDraft){
        super(number);
        this.setOverdraft(overDraft);
    }
    setOverdraft(overDraft){
        this._overDraft=overDraft;
    }
    getOverdraft(){
        return this._overDraft;
    }

    toString(){
        return "CheckingAccount "+this._number+ ":"+" balance: "+ this._balance+" overdraft limit: "+this._overDraft
    }
    withdraw(amount) {
        if (amount <= -1*this._overDraft) {
            throw new RangeError("Insufficient funds");
        }
        this._balance -= amount;
    }
    endOfMonth(){
      if(this._balance<=0)
       return "Warning, low balance "+this._number+":"+ "balance: "+this._balance+" overdraft limit: " +this._overDraft;
    return super.endOfMonth();
    }
  }

//exports.CheckingAccount = CheckingAccount;
