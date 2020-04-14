package org.tiaa.virtualization.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;


public class ParticipantMapperTest {

    private ParticipantMapper participantMapper;

    @BeforeEach
    public void setUp() {
        participantMapper = new ParticipantMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 2L;
        assertThat(participantMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(participantMapper.fromId(null)).isNull();
    }
}
