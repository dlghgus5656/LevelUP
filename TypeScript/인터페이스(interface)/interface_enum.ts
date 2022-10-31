// * enum
// * 아래는 enum 타입을 쓸때 interface 사용법이다.
interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType2 {
  Home2 = "home",
  Office2 = "office",
  Studio2 = "studio",
}

const contacts: Contact[] = [
  {
    name: "Tony",
    address: "Malibu",
    phones: {
      home: {
        num: 11122223333,
      },
      office: {
        num: 44455556666,
      },
    },
  },
];

// * home, office, studio
// * phoneType이 정해진 타입으로 들어올때 -> enum으로 타입 정의 -> string으로도 가능하지만 객체 key 값의 오타를 방지하기 위해 enum을 사용
function findContactByPhone(
  phoneNumber: number,
  phoneType: PhoneType2
): Contact[] {
  return contacts.filter(
    (contact) => contact.phones[phoneType].num === phoneNumber
  );
}

findContactByPhone(1, PhoneType2.Home2);
