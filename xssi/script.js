var privateKey = "-----BEGIN RSA PRIVATE KEY-----\
MIIEpQIBAAKCAQEAxaEY8URy0jFmIKn0s/WK6QS/DusEGRhP4Mc2OwblFQkKXHOs\
XYfbVmUCySpWCTsPPiKwG2a7+3e5mq9AsjCGvHyyzNmdEMdXAcdrf45xPS/1yYFG\
0v8xv6QIJnztMl18xWymaA5j2YGQieA/UNUJHJuvuvIMkZYkkeZlExszF2fRSMJH\
FUjnFNiYt0R8agdndexvuxFApYG40Hy6BJWgKW3NxowV9XbHOaDvX+3Bal5tbtrM\
IzqTptgldzMGs73bJ+7nUqyv7Dicbn1XD4j9XBYy+FOBhVagSztqMFpOFcfAK7Er\
sorY0yWN6aBobtENBUPkeqGiHxBAQ42ki9QkUwIDAQABAoIBAQCThrBx2iDEW2/b\
TkOG2vK5A3wEDNfgS8/FAbCv23PCgh8j6I1wvGu1UG4F8P6MoXO9dHN14PjOvQ7m\
M5Dd82+A4K0wUfn3fnaqs0zByXkqrdSSeVh/RVTDtBUJdhQylqr/TR3ja2qKATf+\
VFGva3gDzQwfR3SucSAXcZ9d5d37x4nzFRa8ogNxxkCUy1PYHqnIpB/4MsOL8f0S\
F5LR+u/F67GKFzGZXyh1i/tgIHZCOvftmj2DLx/1EoZyiLSnMABt7XmztIqYXTJG\
TnXi8ix4vkwUENfveZb9yKrdmrPGITi+f5FYDlyjeSXZYZqAGhSjI69juNn36gCa\
6Idt7I3xAoGBAOenoayBlmGEsWDGL8/XuAUlsceGRSoQ/MrGqx7LSgvkROYDyAfE\
Db8vfy6f/qf9OI1EHwzu8QYnwKh8D0zldz9xl9Fwx4k1EIcD2BjTiJMBBk0FeybO\
sqe4UwGzJvsTmfhlhJ4zZYLi1wMmkt1q1sMm9gb55nfTUDH8lzWJE/mFAoGBANpm\
DcmcaUsSXkbBbmHZiV07EW4BUBpleog6avcNOcdGcylvDs17IwG28toAtOiJqQ/F\
qnOqkQ73QXU7HCcmvQoX/tyxJRg/SMO2xMkYeHA+OamMrLvKgbxGLPG5O9Cs8QMl\
q944WOrNhSfBE+ghPz4mpBbAxOOw0SoUYwCd52H3AoGAQnTLo8J1UrqPbFTOyJB5\
ITjkHHo/g0bmToHZ+3aUYn706Quyqc+rpepJUSXjF2xEefpN8hbmHD7xPSSB+yxl\
HlVHGXWCOLF5cVI//zdIGewUU6o73zEy/Xyai4VKrIK+DA2LkxrphzfuOOArB8wr\
mkamE/BDFqMPgZeWBWyyx0UCgYEAg9kqp7V6x6yeJ98tEXuv9w3q9ttqDZWIBOgn\
nWBpqkl4yuHWMO0O9EELmdrlXKGG5BO0VMH7cuqIpQp7c5NqesaDwZ5cQ6go+KbF\
ZJYWV8TpMNfRjEm0SwKerYvjdZaCpiC/AphH7fEHWzmwF+rCcHYJiAb2lnMvw1St\
dDjf8H8CgYEA4US7hhi1B2RDSwmNGTTBlGpHqPN73gqx2uOb2VYQTSUA7//b3fkK\
pHEXGUaEHxxtEstSOUgT5n1kvo+90x3AbqPg6vAN4TSvX7uYIWENicbutKgjEFJi\
TpCpdZksy+sgh/W/h9T7pDH272szBDo6g1TIQMCgPiAt/2yFNWU6Hks=\
-----END RSA PRIVATE KEY-----",
    keys = [
      { name: 'Key No 1', apiKey: '0c8aab23-2ab5-46c5-a0f2-e52ecf7d6ea8', privateKey: privateKey },
      { name: 'Key No 2', apiKey: '1e4b8312-f767-43eb-a16b-d44d3e471198', privateKey: privateKey }
    ];
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
