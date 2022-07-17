import LoveLangKeys from '../../types/LoveLangKeys';

interface dataType {
  question1: {
    content: string;
    check: LoveLangKeys;
  };
  question2: {
    content: string;
    check: LoveLangKeys;
  };
}

const data: dataType[] = [
  {
    question1: {
      content: '나는 나를 인정하는 내용의 쪽지를 받기를 좋아한다.',
      check: 'A',
    },
    question2: {
      content: '나는 안기는 것이 좋다.',
      check: 'E',
    },
  },
  {
    question1: {
      content: '특별한 사람과 일대일로 시간을 보내는 게 좋다.',
      check: 'B',
    },
    question2: {
      content: '누군가 내게 실질적인 도움을 줄 때 사랑 받는다고 느낀다.',
      check: 'D',
    },
  },
  {
    question1: {
      content: '사람들로부터 선물을 받는 게 좋다.',
      check: 'C',
    },
    question2: {
      content: '친구나 사랑하는 사람을 만나 여유있게 시간을 보내는 게 좋다.',
      check: 'B',
    },
  },
  // {
  //   question1: {
  //     content: '상대방이 나를 도와줄 때 사랑받고 있다고 느낀다.',
  //     check: 'D',
  //   },
  //   question2: {
  //     content: '상대방이 스킨십을 해줄 때 사랑받고 있다고 느낀다.',
  //     check: 'E',
  //   },
  // },
  // {
  //   question1: {
  //     content:
  //       '내가 사랑하거나 흠모하는 사람이 내 어깨에 팔을 두르면 사랑받는다고 느낀다.',
  //     check: 'E',
  //   },
  //   question2: {
  //     content:
  //       '내가 사랑하거나 흠모하는 사람에게 선물을 받을 때 사랑받는다고 느낀다.',
  //     check: 'C',
  //   },
  // },
  // {
  //   question1: {
  //     content: '친구들이나 사랑하는 사람들과 함께 여기저기 다니는 것이 좋다.',
  //     check: 'B',
  //   },
  //   question2: {
  //     content:
  //       '친구들이나 사랑하는 사람들과 하이파이브를 하거나 손을 잡는 게 좋다.',
  //     check: 'E',
  //   },
  // },
  // {
  //   question1: {
  //     content: '내겐 눈에 보이는 사랑의 상징(선물)이 중요하다.',
  //     check: 'C',
  //   },
  //   question2: {
  //     content: '사람들이 인정해줄 때 사랑받는다고 느낀다.',
  //     check: 'A',
  //   },
  // },
  // {
  //   question1: {
  //     content: '좋아하는 사람 곁에 가까이 앉는 것이 좋다.',
  //     check: 'E',
  //   },
  //   question2: {
  //     content: '내가 매력적이라고 / 예쁘다고 말해주는 사람이 좋다.',
  //     check: 'A',
  //   },
  // },
  // {
  //   question1: {
  //     content: '친구나 사랑하는 사람들과 시간을 보내는 게 좋다.',
  //     check: 'B',
  //   },
  //   question2: {
  //     content: '친구나 사랑하는 사람들로부터 작은 선물을 받는 게 좋다.',
  //     check: 'C',
  //   },
  // },
  // {
  //   question1: {
  //     content: '인정하는 말이 중요하다.',
  //     check: 'A',
  //   },
  //   question2: {
  //     content: '누군가 나를 도와주면 그 사람이 나를 좋아한다고 생각한다.',
  //     check: 'D',
  //   },
  // },
  // {
  //   question1: {
  //     content:
  //       '친구나 사랑하는 사람들과 함께 있거나 함께 어떤 일을 하는 것을 좋아한다.',
  //     check: 'B',
  //   },
  //   question2: {
  //     content: '친절한 말을 들을 때가 좋다.',
  //     check: 'A',
  //   },
  // },
  // {
  //   question1: {
  //     content: '상대방이 하는 말보다 그 사람의 행동이 내게 더 큰 영향을 준다.',
  //     check: 'D',
  //   },
  //   question2: {
  //     content:
  //       '포옹을 하면 친밀한 느낌, 상대방이 나를 소중히 여긴다는 느낌이 든다.',
  //     check: 'E',
  //   },
  // },
  // {
  //   question1: {
  //     content: '나는 칭찬을 소중히 여기고 비판을 피하려 든다.',
  //     check: 'A',
  //   },
  //   question2: {
  //     content: '커다란 선물 하나보다 작은 선물 여러 개가 더 의미있다.',
  //     check: 'C',
  //   },
  // },
  // {
  //   question1: {
  //     content:
  //       '누군가와 함께 이야기를 하거나 무언가를 같이하면 그와 가깝게 느껴진다.',
  //     check: 'B',
  //   },
  //   question2: {
  //     content: '친구나 사랑하는 사람들과 스킨십을 하면 더욱 친밀감을 느낀다.',
  //     check: 'E',
  //   },
  // },
  // {
  //   question1: {
  //     content: '사람들이 내가 한 일을 칭찬하는 게 좋다.',
  //     check: 'A',
  //   },
  //   question2: {
  //     content: '사람들이 날 위해 하기 싫은 해줄 때 그들의 사랑을 느낀다.',
  //     check: 'C',
  //   },
  // },
  // {
  //   question1: {
  //     content: '친구나 사랑하는 사람들이 나를 만지면서 지나가는 게 좋다.',
  //     check: 'E',
  //   },
  //   question2: {
  //     content:
  //       '사람들이 내 말을 경청하고 내 말에 진정한 관심을 보이는 게 좋다.',
  //     check: 'B',
  //   },
  // },
  // {
  //   question1: {
  //     content:
  //       '친구들과 사람하는 사람들이 내 업무나 일을 도와줄 때 그들의 사랑을 느낀다.',
  //     check: 'D',
  //   },
  //   question2: {
  //     content: '친구나 사랑하는 사람들로부터 선물을 받는 게 좋다.',
  //     check: 'C',
  //   },
  // },
  // {
  //   question1: {
  //     content: '사람들이 내 외모를 칭찬하는 게 좋다.',
  //     check: 'A',
  //   },
  //   question2: {
  //     content:
  //       '사람들이 내 기분을 이해하기 위해 시간을 낼 때 그들의 사랑을 느낀다.',
  //     check: 'B',
  //   },
  // },
  // {
  //   question1: {
  //     content: '특별한 사람이 나를 만져줄 때 안정감을 느낀다.',
  //     check: 'E',
  //   },
  //   question2: {
  //     content: '도움을 받으면 사랑받고 있음을 느낀다.',
  //     check: 'D',
  //   },
  // },
  // {
  //   question1: {
  //     content: '특별한 사람들이 나를 위해 하는 많은 일들에 감사한다.',
  //     check: 'D',
  //   },
  //   question2: {
  //     content: '특별한 사람들이 나를 위해 만든 선물을 받는 것을 좋아한다.',
  //     check: 'C',
  //   },
  // },
  // {
  //   question1: {
  //     content: '누군가의 온전한 관심을 받을 때 기분이 좋다.',
  //     check: 'B',
  //   },
  //   question2: {
  //     content: '누군가 나를 위해 헌신할 때 기분이 좋다.',
  //     check: 'D',
  //   },
  // },
  // {
  //   question1: {
  //     content: '생일날 선물로 축하를 받을 때 사랑 받는다고 느낀다.',
  //     check: 'C',
  //   },
  //   question2: {
  //     content: '생일날 뜻 깊은 말로 축하를 받을 때 사랑 받는다고 느낀다.',
  //     check: 'A',
  //   },
  // },
  // {
  //   question1: {
  //     content: '상대방이 선물을 주면 그 사람의 특별한 마음이 느껴진다.',
  //     check: 'C',
  //   },
  //   question2: {
  //     content: '상대방이 나의 허드렛일을 도와줄 때 사랑받는다고 느낀다.',
  //     check: 'D',
  //   },
  // },
  // {
  //   question1: {
  //     content:
  //       '누군가 내 말을 끊지 않고 참을성 있게 들어줄 때 고마움을 느낀다.',
  //     check: 'B',
  //   },
  //   question2: {
  //     content: '누군가 특별한 날을 기억하고 선물을 줄 때 고마움을 느낀다.',
  //     check: 'C',
  //   },
  // },
  // {
  //   question1: {
  //     content:
  //       '사랑하는 사람들이 내게 관심을 갖고 내 일상 업무를 도와줄 때 기분이 좋다.',
  //     check: 'D',
  //   },
  //   question2: {
  //     content: '특별한 사람과 함께 장기 여행을 다니는 게 좋다.',
  //     check: 'B',
  //   },
  // },
  // {
  //   question1: {
  //     content: '가까운 사람에게 키스하거나 키스를 받는 것이 좋다.',
  //     check: 'E',
  //   },
  //   question2: {
  //     content: '특별한 이유없이 선물을 받으면 신이 난다.',
  //     check: 'C',
  //   },
  // },
  // {
  //   question1: {
  //     content: '고맙다는 말을 듣는 게 좋다.',
  //     check: 'A',
  //   },
  //   question2: {
  //     content: '대화를 나누는 사람이 나를 쳐다보는 게 좋다.',
  //     check: 'B',
  //   },
  // },
  // {
  //   question1: {
  //     content: '친구나 사랑하는 사람이 준 선물은 내게 언제나 특별하다.',
  //     check: 'C',
  //   },
  //   question2: {
  //     content: '친구나 사랑하는 사람이 나를 쳐다보는 게 좋다.',
  //     check: 'E',
  //   },
  // },
  // {
  //   question1: {
  //     content:
  //       '상대방이 내가 요청한 어떤 일을 열정적으로 할 때 그 사람의 사랑을 느낀다.',
  //     check: 'D',
  //   },
  //   question2: {
  //     content: '너무나 고맙다는 말을 들을 때 사랑받고 있음을 느낀다.',
  //     check: 'A',
  //   },
  // },
  // {
  //   question1: {
  //     content: '나는 매일 스킨십을 받고 싶다.',
  //     check: 'E',
  //   },
  //   question2: {
  //     content: '나는 매일 인정하는 말을 듣고 싶다.',
  //     check: 'A',
  //   },
  // },
];

export default data;
