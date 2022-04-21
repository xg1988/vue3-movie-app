import {mount} from '@vue/test-utils'
import Example from './Example.vue'

test('메세지를 변경합니다.', async ()=>{
    // https://v1.test-utils.vuejs.org/guides/#getting-started
    // https://test-utils.vuejs.org/api/#attrs
    const wrapper = mount(Example, {
        
    })

    expect(wrapper.vm.msg).toBe('Hello vue test utils')
    
    await wrapper.setData({
        msg: 'test'
    })

    expect(wrapper.vm.msg).toBe('test')

    expect(wrapper.find('div').text()).toBe('test')
})

//import {double, asyncFn} from './example'
/*
import {fetchMovieTitle} from './example';
import axios from 'axios'

describe('비동기 테스트', ()=>{
    test('영화제목변환', async () =>{
        // 모의함수로 동작하도록 변경함
        axios.get = jest.fn(()=>{
            return new Promise(resolve=>{
                resolve({
                    data:{
                        Title: 'Frozen II'
                    }
                });
            })
        });

        const title = await fetchMovieTitle();
        expect(title).toBe('Frozen ii');
    })
})
*/
/*

describe('비동기 테스트', ()=>{
    test('done', (done)=>{
        asyncFn().then(res=>{
            expect(res).toBe('Done');
            done();
        })
    });

    test('then', ()=>{
        return asyncFn().then(res =>{
            expect(res).toBe('Done');
        })
    })

    test('resolves', ()=>{
        return expect(asyncFn()).resolves.toBe('Done');
    })
*/
   /* test('async/await', async ()=>{
        // 모의함수. 특정 값을 반환하도록 테스트 빠르게 가능하도록 해준다.
        // 가짜의 함수를 만들수 있다.
        jest.spyOn(example, 'asyncFn').mockResolvedValue('Done'); 

        const res = await example.asyncFn();
        expect(res).toBe('Done');
    }, 7000); // 최대 기다릴 수 있는 시간 설정
});


/*
describe('그룹1', ()=>{

    beforeAll(()=>{
        console.log("beforeAll")
    });

    afterAll(()=>{
        console.log("afterAll")
    });

    beforeEach(()=>{
        console.log("beforeEach")
    });

    afterEach(()=>{
        console.log("afterEach")
    });

    // test testName, callback function
    test('첫 테스트', ()=>{
        expect(123).toBe(123);
    })

    test('인수가 숫자 데이터입니다. ', ()=>{
        expect(double(3)).toBe(6);
        expect(double(10)).toBe(20);
    })

    test('인수가 없습니다. ', ()=>{
        expect(double()).toBe(0);
    })    
})

// test testName, callback function
test('첫 테스트', ()=>{
    expect(123).toBe(123);
})

test('인수가 숫자 데이터입니다. ', ()=>{
    expect(double(3)).toBe(6);
    expect(double(10)).toBe(20);
})

test('인수가 없습니다. ', ()=>{
    expect(double()).toBe(0);
}) */