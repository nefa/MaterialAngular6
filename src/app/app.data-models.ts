export class BaseAccount {
  constructor({
    id, typeId, productId, iban, productName, balance, currency, status, idShort, nickname,
    branchId, overdraftLimit, owner, ownerCif, representative,
    interestRate, maturityDate, openingDate, interestDue,
    nextPaymentAmount, nextPaymentDate, nextPaymentDueDate, nextPaymentFee2,
    originalAmount, principalDue, totalPaymentsPastDue, olp, index, currentBalance,
    cardsData, minimumPaymentAmount, totalHoldsAmount,
  }) {
    Object.assign(this, {
      id, typeId, productId, iban, productName, balance, currency, status, idShort, nickname,
      branchId, overdraftLimit, owner, ownerCif, representative,
      interestRate, maturityDate, openingDate, interestDue,
      nextPaymentAmount, nextPaymentDate, nextPaymentDueDate, nextPaymentFee2,
      originalAmount, principalDue, totalPaymentsPastDue, olp, index, currentBalance,
      cardsData, minimumPaymentAmount, totalHoldsAmount,
    })
  }

  deserialize({
    id, typeId, productId, iban, productName, balance, currency, status, idShort, nickname,
    branchId, overdraftLimit, owner, ownerCif, representative,
    interestRate, maturityDate, openingDate, interestDue,
    nextPaymentAmount, nextPaymentDate, nextPaymentDueDate, nextPaymentFee2,
    originalAmount, principalDue, totalPaymentsPastDue, olp, index, currentBalance,
    cardsData, minimumPaymentAmount, totalHoldsAmount,
  }) {
    Object.assign(this, {
      id, typeId, productId, iban, productName, balance, currency, status, idShort, nickname,
      branchId, overdraftLimit, owner, ownerCif, representative,
      interestRate, maturityDate, openingDate, interestDue,
      nextPaymentAmount, nextPaymentDate, nextPaymentDueDate, nextPaymentFee2,
      originalAmount, principalDue, totalPaymentsPastDue, olp, index, currentBalance,
      cardsData, minimumPaymentAmount, totalHoldsAmount,
    })
  }
};



export class CreditAccount extends BaseAccount {
  ccAccountId;
  ccProductId; 
  ccBranchId; 
  ccCurrentBranchId; 
  ccAccountStatus; 
  ccCurrentBalance; 
  ccDateApproved; 
  ccCreditLimit; 
  ccLastStatementImported; 
  ccLastStatementBalance;
  ccMinimumPaymentAmount;
  ccLastPaymentAmount; 
  ccNextPaymentDate; 
  ccPeriodStart; 
  ccPeriodEnd; 
  ccPeriod; 

  constructor({
    balance, branchId, currency, iban, id, nickname, olp, openingDate, overdraftLimit, owner,
    ownerCif, productId, productName, representative, status, typeId, ccAccountId,
    ccProductId, ccBranchId, ccCurrentBranchId, ccAccountStatus, ccCurrentBalance,
    ccDateApproved, ccCreditLimit, ccLastStatementImported, ccLastStatementBalance, ccMinimumPaymentAmount,
    ccLastPaymentAmount, ccNextPaymentDate, ccPeriodStart, ccPeriodEnd, ccPeriod,
  }) {
    super({
      // the credit account should display the ccCurrentBalance instead of the technical 133 account balance
      balance: ccCurrentBalance,
      branchId,
      currency,
      iban,
      id,
      nickname,
      olp,
      openingDate,
      overdraftLimit,
      owner,
      ownerCif,
      productId,
      productName,
      representative,
      status,
      typeId,
    });

 
  } 
}

export  class CardInfo {
  constructor({
    accountId, accountNickName, accountType, cardDescription, cardDRSCode, cardProductCode, cardId, cardImageUrl,
    cardNumber, cardType, cardStatus, currency, iban, mainCard,
  }) {}
}

export  class CardOwnerInfo {
  _expDate:Date;

  constructor({ companyName, embossName, expirationDate }) {
    this._expDate = new Date(expirationDate);
  }

  set expirationDate(date) {
    this._expDate = new Date(date);
  }

  get expirationDate() {
    return this._expDate;
  }
}

export class Card {
  // Please consider using unique keys
  cardInfo: CardInfo;
  ownerInfo: CardOwnerInfo;
  showBlockWithEmit;
  cardStatusesInfo;

  constructor({
    accountId, accountNickName, accountType, cardDescription, cardDRSCode, cardProductCode, cardId, cardImageUrl,
    cardNumber, cardType, cardStatus, currency, iban, mainCard, companyName, embossName, expirationDate,
    blockAndReissue
  }) {
    this.cardInfo = new CardInfo({
      accountId,
      accountNickName,
      accountType,
      cardDescription,
      cardDRSCode,
      cardProductCode,
      cardId,
      cardImageUrl,
      cardNumber,
      cardType,
      cardStatus,
      currency,
      iban,
      mainCard,
      blockAndReissue,
    });
    this.ownerInfo = new CardOwnerInfo({ companyName, embossName, expirationDate });
    this.showBlockWithEmit = /*CONSTANTS.CARD_TYPE.CREDIT === cardType ? blockAndReissue : true*/'';
    this.cardStatusesInfo = this.getCardStatusesInfo();
  }


  getCardStatusesInfo() {}