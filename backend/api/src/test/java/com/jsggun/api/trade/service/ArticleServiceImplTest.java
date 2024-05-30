package com.jsggun.api.trade.service;

import com.jsggun.api.trade.model.Trade;
import com.jsggun.api.trade.model.TradeDto;
import com.jsggun.api.trade.repository.TradeRepository;
import com.jsggun.api.trade.service.TradeService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.BDDMockito;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@TestPropertySource(locations = "classpath:application.yml")
@ExtendWith(MockitoExtension.class)
public class ArticleServiceImplTest {

    private TradeService service;
    private static Trade testArticle;
    @Mock
    private TradeRepository repository;
    @BeforeEach
    void setUp(){
//        this.service = new ArticleServiceImpl(repository);
    }

    @BeforeEach
    void init(){
        testArticle = Trade.of( "자바스크립트 수업", "자바스크립트의 객체 제이슨");
    }


    @Test
    public void 게시글_제목_검색() throws Exception{
//    Given
        repository.save(testArticle);

//    When
        Trade article = repository.findById(1L).get();

//    Then
        assertThat(article.getTitle()).isEqualTo("자바스크립트 수업");
    }

    @Test
    public void 게시글_전체_검색() throws Exception{
        List<Trade> articles = getList();

        BDDMockito.given(repository.findAll()).willReturn(articles);
        List<TradeDto> list = service.findAll();
        assertThat(list.size()).isEqualTo(3);
    }



    private List<Trade> getList(){
     return Arrays.asList(
             Trade.builder().id(1L).title("자바수업").content("자바의 객체 인스턴스").build(),
             Trade.builder().id(2L).title("리엑트수업").content("리엑트의 객체 컴포넌트").build(),
             Trade.builder().id(3L).title("스프링수업").content("스프링의 객체 빈 ").build()
     );
    }

}