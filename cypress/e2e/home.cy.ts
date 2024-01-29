describe('스왑 플로우 테스트', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/');
    });

    // 1. 기본 플로우 테스트
    it('기본 플로우 테스트', () => {
        cy.get('[data-testid="swap-input-A"]').type('1'); // 토큰 A의 입력값으로 '1'을 입력합니다.
        cy.get('[data-testid="swap-output-A"]').should('contain', '$'); // 화면에 달러표시가 포함되어 있는지 확인합니다.
        cy.get('[data-testid="swap-input-B"]').type('2'); // 토큰 B의 입력값으로 '2'를 입력합니다.
        cy.get('[data-testid="swap-output-B"]').should('contain', '$'); // 화면에 달러표시가 포함되어 있는지 확인합니다.
        cy.get('[data-testid="value-per-token"]').should('contain', '1'); // '1코인 값어치'가 화면에 보이는지 확인합니다.
        cy.get('[data-testid="swap-button"]').should('be.enabled').click(); // 스왑 버튼이 활성화 되어 있는지 확인하고 클릭합니다.
    });

    // 2. 스왑 방향 전환 테스트
    it('스왑 방향 전환 테스트', () => {
        cy.get('[data-testid="swap-input-A"]').type('2');
        cy.get('[data-testid="swap-output-A"]').should('contain', '$'); // 화면에 달러표시가 포함되어 있는지 확인합니다.
        cy.get('[data-testid="direction-switch-button"]').click(); // 토큰 A와 B의 위치를 전환합니다.
        cy.get('[data-testid="swap-input-B"]').should('have.value', '2'); // 토큰 B가 이전 토큰 A의 값을 가지고 있는지 확인합니다.
        cy.get('[data-testid="direction-switch-button"]').click(); // 원 상태로 복귀하는지 확인합니다.
    });

    // 3. 토큰 선택 모달 테스트
    it('토큰 선택 모달 테스트', () => {
        cy.get('[data-testid="token-selection-A"]').click(); // 토큰 A 선택을 위해 모달을 엽니다.
        cy.get('[data-testid="token-search"]').type('AXS'); // 모달 내에서 AXS를 검색합니다.
        cy.get('[data-testid="token-select-AXS"]').click(); // 검색 결과에서 AXS를 선택합니다.
        cy.get('[data-testid="token-selection-A"]').contains('AXS'); // 토큰 A가 AXS로 변경되었는지 확인합니다.
    });

    // 4. 입력값 삭제 테스트
    it('입력값 삭제 테스트', () => {
        cy.get('[data-testid="swap-input-A"]').type('1');
        cy.get('[data-testid="swap-output-A"]').should('contain', '$'); // 화면에 달러표시가 포함되어 있는지 확인합니다.
        cy.get('[data-testid="swap-input-B"]').should('exist');
        cy.get('[data-testid="swap-input-B"]').clear();
        cy.get('[data-testid="swap-input-A"]').should('contain', '');
        // '1코인 값어치 표기'가 사라지는지 확인
        cy.get('[data-testid="value-per-token"]').should('not.exist');
        cy.get('[data-testid="swap-button"]').should('be.disabled');
    });

    // 5. 모달 테스트
    it('모달 테스트', () => {
        cy.get('[data-testid="token-selection-A"]').click(); // 모달을 열기 위한 버튼 클릭
        cy.get('[data-testid="token-select-modal"]').should('have.css', 'opacity', '1'); // 모달의 opacity가 1인지 확인하여 보이는 상태인지 검사
        cy.get('[data-testid="modal-close-button"]').click(); // 모달의 닫기 버튼 클릭하여 모달 닫기
        cy.get('[data-testid="token-select-modal"]').should('have.css', 'opacity', '0'); // 모달의 opacity가 0인지 확인하여 안 보이는 상태인지 검사
    });

    // 6. 최근 토큰 목록 테스트
    it('최근 토큰 목록 테스트', () => {
        cy.clearLocalStorage('recent-tokens'); // 로컬스토리지 'recent-tokens' 초기화
        cy.get('[data-testid="token-selection-A"]').click(); // 모달을 열기 위한 버튼 클릭
        cy.get('[data-testid="token-select-modal"]').should('have.css', 'opacity', '1'); // 모달의 오픈
        cy.get('[data-testid="recent-tokens-list"]').should('not.exist'); // 최근 토큰 목록이 비어 있는지 확인
        cy.get('[data-testid="token-select-ETH"]').click(); // ETH 선택 옵션을 클릭
        cy.get('[data-testid="token-select-modal"]').should('have.css', 'opacity', '0'); // 모달의 닫힘
        cy.get('[data-testid="token-selection-A"]').click(); // 모달을 열기 위한 버튼 클릭
        cy.get('[data-testid="recent-tokens-list"]').should('contain', 'ETH'); // 목록 내 ETH가 추가되었는지 확인
    });
});
