package org.tiaa.virtualization.service.mapper;

import org.tiaa.virtualization.domain.*;
import org.tiaa.virtualization.service.dto.ParticipantDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Participant} and its DTO {@link ParticipantDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface ParticipantMapper extends EntityMapper<ParticipantDTO, Participant> {



    default Participant fromId(Long id) {
        if (id == null) {
            return null;
        }
        Participant participant = new Participant();
        participant.setId(id);
        return participant;
    }
}
