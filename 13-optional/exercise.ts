interface IPayment {
  sum: number;
  from: number;
  to: number;
}

enum PaymentStatus {
  Success = 'success',
  Failed = 'failed',
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IDataFailed {
  errorMessage: '';
  errorCode: number;
}

// interface IResponse {
//   status: PaymentStatus;
//   data: IDataSuccess | IDataFailed;
// }

interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus.Failed;
  data: IDataFailed;
}

function get(): IResponseSuccess | IResponseFailed {
  return {
    status: PaymentStatus.Failed,
    data: {
      errorMessage: '',
      errorCode: 12,
    },
  };
}

type f = (res: IResponseSuccess | IResponseFailed) => number;

type Res = IResponseSuccess | IResponseFailed;

function isSuccess(res: Res): res is IResponseSuccess {
  return res.status === PaymentStatus.Success;
}

function getIdFromData(res: Res): number {
  if (isSuccess(res)) {
    return res.data.databaseId;
  }

  throw new Error(res.data.errorMessage);
}
